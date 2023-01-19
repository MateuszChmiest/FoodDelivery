import { createContext, ReactNode, useContext, useState } from "react";

const CartContext = createContext({} as CartContext);

export function useCartContext() {
	return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
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
			value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCart, cartQuantity }}>
			{children}
		</CartContext.Provider>
	);
}

type CartProviderProps = {
	children: ReactNode;
};

type CartContext = {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeCart: (id: number) => void;
    cartQuantity: number;
};

type CartItem = {
	id: number;
	quantity: number;
};
