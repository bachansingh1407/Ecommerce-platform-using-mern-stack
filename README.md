# E-Commerce Application

## Overview
This is a feature-rich e-commerce frontend application built with React and modern web technologies. The application provides a complete shopping experience with product browsing, cart management and more.

## Features

### 1. Product Catalog
- **Product Listing Page**: Responsive grid layout displaying all available products
- **Product Filtering**: Filter products by category, price range, ratings, and other attributes
- **Product Sorting**: Sort by price (low-high, high-low), newest, popularity, and ratings
- **Search Functionality**: Full-text search across product names and descriptions
- **Product Variations**: Support for different colors, sizes, and other product variants

### 2. Product Details
- **Detailed Product View**: High-resolution images with zoom capability
- **Image Gallery**: Thumbnail navigation for product images
- **Product Specifications**: Technical details and features list
- **Related Products**: Show similar or frequently bought together items

### 3. Shopping Cart
- **Cart Management**: Add/remove items, update quantities
- **Cart Summary**: Display subtotal, estimated taxes, and shipping costs
- **Persistent Cart**: Cart contents preserved across sessions using localStorage
- **Multiple Cart Items**: Support for different product variants in cart
- **Quick Cart Preview**: Mini-cart dropdown showing current items
- 
### 4. UI/UX Features
- **Responsive Design**: Fully functional on mobile, tablet, and desktop
- **Loading States**: Skeleton screens during data loading
- **Error Handling**: User-friendly error messages and fallback UIs
- **Toast Notifications**: System-wide notification service

### 5. Redux Implementation
- **Centralized State Management**: Single source of truth for all application data
- **Persisted State**: Selected state preserved across page refreshes
- **Normalized State**: Optimized data structure for entities

### 6. Performance Optimizations
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Responsive images with modern formats

## Technologies Used

### Core
- React 18 (Functional Components with Hooks)
- Context API (State Management)
- React Router v6 (Navigation)

### Styling
- CSS Modules / Sass (Styling)
- Styled Components (CSS-in-JS)
- react-icons (Icon Library)

## Project Structure

```
/src
│
├── /assets                  # Static assets (images, fonts, logos, etc.)
│
├── /components              # Reusable UI components
│   ├── /category            # Category-specific UI components
│   ├── /common              # Generic components (buttons, modals, inputs, etc.)
│   ├── /footer              # Footer layout and elements
│   ├── /header              # Header/Navbar layout and logic
│   ├── /look                # Fashion "Look" showcase components
│   └── /testimonials        # Customer testimonial components
│
├── /context                 # React Context API for global state
│   └── /CartContext         # Shopping cart logic and provider
│
├── /pages                   # Full page components (mapped to routes)
│   ├── About.jsx
│   ├── About.css
│   ├── Cart.jsx
│   ├── Cart.css
│   ├── Collections.jsx
│   ├── Collections.css
│   ├── Home.jsx             # Homepage layout and logic
│   ├── Home.css
│   ├── ProductDetail.jsx    # Product details page
│   ├── ProductDetail.css
│   └── ProductData.js       # Sample/mock product data
│
├── App.jsx                  # Root component that sets up routing/layout
├── App.css                  # Global styles for App.jsx
└── index.jsx                # Application entry point (ReactDOM render)
```

## Getting Started

### Prerequisites
- npm (v8 or higher) or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bachansingh1407/Ecommerce-platform-using-mern-stack.git
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts

- `start`: Runs the app in development mode
- `build`: Builds the app for production
- `test`: Runs the test watcher
- `lint`: Runs ESLint on the project
- `format`: Runs Prettier to format code
- `analyze`: Analyzes the production bundle

## Mock Data
The application uses mock data stored in JSON files to simulate API responses. These can be found in `/src/mocks`. To modify the products, categories, or other data, edit the corresponding JSON files.

## Future Enhancements
- Integration with real backend API
- Progressive Web App (PWA) features
- Advanced analytics tracking
- Recommendation engine
- Loyalty program integration
- Social sharing features
- AR product preview
