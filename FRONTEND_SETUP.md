# Frontend Setup Guide

Complete guide for setting up the frontend to use the Node.js backend for MongoDB storage.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

## Environment Configuration

### 1. Update `.env.local`

The `.env.local` file in the root directory should contain:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

This URL tells the frontend where to find the backend API.

## How It Works

### Session Management

When a user clicks "Add To Cart", the system:

1. **Creates a Session ID** - Unique identifier stored in browser's localStorage
2. **Adds to Local Cart** - Updates the React Context for immediate UI feedback
3. **Saves to Database** - Sends item to backend MongoDB database

### Flow Diagram

```
User clicks "Add To Cart"
        ↓
Local state updates (Cart context)
        ↓
API call to backend (/api/cart/add)
        ↓
Data saved to MongoDB
```

## API Integration

### Available Functions

The `/lib/api.js` file provides these functions:

#### 1. `addToCartDatabase(product)`
Saves a product click to the database.

```javascript
import { addToCartDatabase } from '@/lib/api';

await addToCartDatabase({
  id: 'product-1',
  name: 'Chicken Shawarma',
  description: 'Delicious chicken shawarma',
  price: 500,
  category: 'Main Course',
  badge: 'Regular'
});
```

#### 2. `getCartItems()`
Retrieves all cart items for current session.

```javascript
import { getCartItems } from '@/lib/api';

const items = await getCartItems();
console.log(items); // Array of cart items
```

#### 3. `removeFromCart(itemId)`
Removes an item from the database.

```javascript
import { removeFromCart } from '@/lib/api';

await removeFromCart('662f3a4c8c1e2b3d4e5f6g7h');
```

#### 4. `updateCartItemQuantity(itemId, quantity)`
Updates the quantity of a cart item.

```javascript
import { updateCartItemQuantity } from '@/lib/api';

await updateCartItemQuantity('662f3a4c8c1e2b3d4e5f6g7h', 2);
```

#### 5. `clearCartDatabase()`
Clears all items in cart for current session.

```javascript
import { clearCartDatabase } from '@/lib/api';

await clearCartDatabase();
```

## Updated Components

### 1. Products Component (`app/home/components/products.tsx`)

The "Add To Cart" button now:
- Adds item to local React context
- Saves to MongoDB via API

```typescript
import { addToCartDatabase } from '@/lib/api';

// In button onClick:
onClick={() => {
  addItem(product);  // Local state
  addToCartDatabase(product);  // Database
}}
```

### 2. Order Menu Component (`app/order/orderMainSection.jsx`)

The "Add To Cart" button for menu items now:
- Adds item to local React context
- Saves to MongoDB via API

## Running the Application

### 1. Start Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on: `http://localhost:5000`

### 2. Start Frontend

```bash
cd shawarmastop-aliraza-main
npm install
npm run dev
```

Frontend runs on: `http://localhost:3000`

## Testing

### 1. Check Backend Health

```bash
curl http://localhost:5000/api/health
```

Should return:
```json
{
  "status": "OK",
  "message": "Shawarma Stop Backend is running",
  "timestamp": "2024-04-24T10:30:00.000Z"
}
```

### 2. Add Item to Cart

1. Open `http://localhost:3000` in browser
2. Click "Add To Cart" on any product
3. Check browser's Application tab → Local Storage for session ID
4. Item should appear in cart

### 3. Verify MongoDB Storage

Use MongoDB Compass or shell:

```javascript
// MongoDB shell
db.cartitems.find()
```

You should see your products with SessionID and timestamp.

## Troubleshooting

### "Cannot connect to backend"

**Problem:** Frontend can't reach backend API
**Solution:**
1. Ensure backend is running: `npm run dev` in backend folder
2. Check NEXT_PUBLIC_API_URL in `.env.local`
3. Verify port 5000 is not blocked
4. Check browser console for exact error

### "Permission denied - 127.0.0.1:5000"

**Problem:** CORS issue
**Solution:**
1. Backend's CORS_ORIGIN may not match frontend URL
2. Update backend `.env`:
   ```env
   CORS_ORIGIN=http://localhost:3000
   ```
3. Restart backend server

### "MongoDB connection failed"

**Problem:** Backend can't connect to MongoDB
**Solution:**
1. Ensure MongoDB is running locally or check MongoDB Atlas credentials
2. Update backend `.env` with correct MONGODB_URI
3. Verify network connectivity

### Session ID not saving

**Problem:** localStorage not working
**Solution:**
1. Check browser allows localStorage
2. Open DevTools → Application → Local Storage
3. Manual test in console:
   ```javascript
   localStorage.setItem('test', 'value');
   localStorage.getItem('test');
   ```

## File Structure

```
shawarmastop-aliraza-main/
├── app/
│   ├── home/components/
│   │   └── products.tsx (Updated)
│   └── order/
│       └── orderMainSection.jsx (Updated)
├── lib/
│   └── api.js (New - API functions)
├── .env.local (Updated - Backend URL)
├── package.json
└── ...
```

## Next Steps

### Features to Add

1. **User Authentication**
   - Login/Signup
   - Link cart to user ID instead of session

2. **Checkout Page**
   - Retrieve cart from database
   - Process payment
   - Create order

3. **Cart Persistence**
   - Load saved cart on page load
   - Sync local and database cart

4. **Analytics**
   - Track product popularity
   - View user behavior
   - Generate reports

### Production Deployment

1. Update NEXT_PUBLIC_API_URL to production backend
2. Deploy backend to hosting service
3. Deploy frontend to Vercel/Netlify
4. Update CORS_ORIGIN to production frontend URL

## Support

For issues or questions, check:
- Backend README: `backend/README.md`
- API endpoints documentation: Backend README
- Browser console for error messages
- MongoDB logs for database issues

## Environment Variables Reference

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (`backend/.env`)
```env
MONGODB_URI=mongodb://localhost:27017/shawarma-stop
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
```
