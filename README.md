# Amazon Clone Project
This is a JavaScript-based web application that replicates core Amazon shopping functionality. The project includes product browsing, cart management, checkout process, order tracking, and a complete order history system.

## Features

### Product Browsing (amazon.html)
- Responsive product grid displaying items with images, names, ratings, and prices
- Product search functionality with keyword-based filtering
- Quantity selection for each product
- Add to cart functionality with visual feedback
- Cart quantity indicator in the header

### Shopping Cart & Checkout (checkout.html)
- Detailed order review page
- Multiple delivery options for each product
- Real-time cart updates:
  - Update item quantities
  - Remove items
  - Select delivery methods
- Order summary with:
  - Item subtotal
  - Shipping & handling costs
  - Tax calculation
  - Order total
- Secure checkout process

### Order Management (orders.html)
* Complete order history display
* Order details including:
   * Order date
   * Total cost
   * Order ID
   * Product details
* "Buy Again" functionality
* Package tracking links for each item

### Order Tracking (tracking.html)
* Visual progress bar showing delivery status
* Delivery status indicators:
  * Preparing
  * Shipped
  * Delivered
* Estimated delivery dates
* Product details and quantity information
* Link back to complete order history

### Technical Implementation

#### Core Components
**1. Product Management**
  * Product data handling with products.js
  * Dynamic product loading
  * Search and filtering capabilities
**2. Cart System**
  - Cart state management in cart.js
  - Add/remove items
  - Quantity updates
  - Delivery option selection
**3. Checkout Process**
  - Order summary generation
  - Payment calculations
  - Tax computation
  - Shipping cost integration
**4. Order System**
  - Order creation and storage
  - Order history management
  - Tracking information updates

## Key JavaScript Modules
 - amazon.js: Main product listing and search functionality
 - checkout.js: Checkout process management
 - orders.js: Order history and "Buy Again" features
 - tracking.js: Order tracking visualization
 - checkoutHeader.js: Cart status header
 - orderSummary.js: Order details and delivery options
 - paymentSummary.js: Payment calculations and order placement
 - money.js: Currency formatting utilities

### External Dependencies
 - dayjs: Date formatting and calculations
 - Google Fonts (Roboto)
 - Backend API integration for order processing

### Responsive Design
The application includes responsive design features:
 - Mobile-friendly layouts
 - Responsive images
 - Adaptive header with mobile/desktop logos
 - Flexible product grid system

## Browser Compatibility
The application uses modern JavaScript features and requires a contemporary web browser that supports:
 - ES6+ JavaScript
 - CSS Grid and Flexbox
 - Modern DOM APIs

## Security Notes
- The application includes basic security features like:
  - HTTPS-only API communication
  - Form input validation
  - Secure checkout indication

## Future Enhancements
Potential areas for improvement include:
- User authentication system
- Saved payment methods
- Advanced search filters
- Product recommendations
- Review system
- Wishlist functionality

For questions or contributions, please open an issue or submit a pull request.
