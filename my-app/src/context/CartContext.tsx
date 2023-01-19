import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const CartContext = createContext({} as TCartContext);

export function useCartContext() {
	return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

	const getItemQuantity = (id: number) => {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	};

	const increaseCartQuantity = (id: number) => {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }];
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id: number) => {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    };

	return (
		<CartContext.Provider
			value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCart, cartItems, cartQuantity, openCart, closeCart, isOpen }}>
			{children}
			<ShoppingCart/>
		</CartContext.Provider>
	);
}

type CartProviderProps = {
	children: ReactNode;
};

type TCartContext = {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeCart: (id: number) => void;
    cartQuantity: number;
	openCart: () => void;
	closeCart: () => void;
	isOpen: boolean;
	cartItems:  CartItem[];
};

type CartItem = {
	id: number;
	quantity: number;
};
