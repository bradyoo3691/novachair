// NovaChair Cart Context
import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
  isWholesale: boolean;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, isWholesale?: boolean) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((product: Product, quantity = 1, isWholesale = false) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.isWholesale === isWholesale);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.isWholesale === isWholesale
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity, isWholesale }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => {
    const price = i.isWholesale ? i.product.wholesalePrice : i.product.price;
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
