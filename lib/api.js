/**
 * Get or create a unique session ID for the user
 */
'use client';

export function getSessionId() {
    if (typeof window === 'undefined') {
        return '';
    }

    let sessionId = localStorage.getItem('shawarma_session_id');
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('shawarma_session_id', sessionId);
    }
    return sessionId;
}

/**
 * Backend API base URL
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Add item to cart in backend database
 */
export async function addToCartDatabase(product) {
    try {
        const sessionId = getSessionId();
        const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: product.id,
                productName: product.name,
                description: product.description || '',
                price: product.price,
                quantity: 1,
                sessionId,
                category: product.category || '',
                badge: product.badge || null,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Failed to save cart item:', error);
            return null;
        }

        const data = await response.json();
        console.log('Item saved to database:', data);
        return data;
    } catch (error) {
        console.error('Error saving cart item to database:', error);
        return null;
    }
}

/**
 * Get all cart items for current session
 */
export async function getCartItems() {
    try {
        const sessionId = getSessionId();
        const response = await fetch(`${API_BASE_URL}/cart?sessionId=${sessionId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch cart items');
        }

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching cart items:', error);
        return [];
    }
}

/**
 * Remove item from cart
 */
export async function removeFromCart(itemId) {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to remove item');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error removing cart item:', error);
        return null;
    }
}

/**
 * Update item quantity
 */
export async function updateCartItemQuantity(itemId, quantity) {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        });

        if (!response.ok) {
            throw new Error('Failed to update quantity');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating cart item:', error);
        return null;
    }
}

/**
 * Save delivery location to backend (JSON file on server)
 */
export async function saveUserLocationToBackend(payload) {
    try {
        const sessionId = getSessionId();
        const response = await fetch(`${API_BASE_URL}/location/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionId,
                locationText: payload.locationText,
                latitude: payload.latitude ?? null,
                longitude: payload.longitude ?? null,
                source: payload.source === 'gps' ? 'gps' : 'manual',
            }),
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            console.error('Failed to save user location:', err);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error saving user location:', error);
        return null;
    }
}

/**
 * Clear entire cart for current session
 */
export async function clearCartDatabase() {
    try {
        const sessionId = getSessionId();
        const response = await fetch(`${API_BASE_URL}/cart/clear-cart/all?sessionId=${sessionId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to clear cart');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error clearing cart:', error);
        return null;
    }
}
