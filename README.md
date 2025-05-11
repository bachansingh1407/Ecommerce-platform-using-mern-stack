
# 🛍️ MERN Stack E-commerce Application(currently Updating...)

A full-featured, responsive e-commerce platform built with the **MERN Stack (MongoDB, Express.js, React, Node.js)**. This application allows users to browse, filter, and purchase fashion products, including clothing, shoes, and hand watches.

## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens), Bcrypt.js
- **DevOps**: Docker, GitHub Actions, AWS (Optional)
- **Deployment**: Vercel (Frontend), Render/Heroku/AWS EC2 (Backend)

---

## 🎯 Features

### 🛒 User Features

- ✅ **Home Page** – Showcases top products in categories: **Men’s, Women’s, Kids’ Fashion, Shoes, Hand Watches**
- 🔍 **Product Filtering** – Filter by category, gender, brand, and price
- 🧾 **Product Details Page** – Detailed info with images, sizes, and availability
- 👥 **User Authentication** – Signup, login, logout using **JWT**
- 💼 **User Dashboard** – Manage orders, profile info, and saved items
- 🛍️ **Add to Cart & Checkout Flow** – Manage cart, quantity, and proceed to checkout
- 💳 **Payment Integration** – Dummy payment gateway (Stripe or Razorpay integration ready)
- 💬 **Product Reviews & Ratings** – Users can leave feedback on products
- 📦 **Order Tracking** – Track order status in real-time

### 🛠️ Admin Features

- 🧑‍💼 **Admin Panel** – Secure admin login with JWT-based access control
- 📦 **Product Management** – Add, update, delete fashion products by category
- 👥 **User Management** – View, block/unblock users
- 📊 **Order Management** – View all orders, update order statuses
- 📈 **Dashboard Analytics** – Total users, sales data, revenue breakdown

---

## 🧵 Fashion Categories

The store showcases a wide range of fashion and lifestyle products:

### 👗 Clothing
- Men’s and Women’s T-Shirts, Jeans, Dresses, Jackets
- Kids' apparel
- Filters: Size, Color, Brand

### 👟 Shoes
- Sports Shoes, Formal Shoes, Sneakers, Heels
- Category-based filtering

### ⌚ Hand Watches
- Analog & Digital watches for men, women
- Filters: Strap Type, Brand, Price

---

## 📁 Project Structure

```bash
ecommerce-app/
├── client/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── services/
│       └── App.jsx
├── server/                  # Node + Express Backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md

