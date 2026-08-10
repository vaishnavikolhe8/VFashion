<<<<<<< HEAD

=======
👗 FashionAppReact

A modern and responsive fashion e-commerce website built with React.js. The application allows users to browse fashion products by category, view product information, add products to a shopping cart, manage quantities, and persist cart data using LocalStorage.

The project also includes Clerk authentication, API-based product data, responsive navigation, and a clean shopping experience built with Tailwind CSS.

✨ Features

🏠 Responsive fashion e-commerce homepage

👗 Browse products by category

📦 Product data fetched from the DummyJSON API

🛍️ Add products to the shopping cart

➕ Increase product quantity

➖ Change product quantity from the cart

🗑️ Remove products from the cart

💰 Automatic subtotal calculation

🧾 Order summary with 2% tax calculation

💾 Cart persistence using LocalStorage

🔐 User authentication using Clerk

📂 Dynamic category routes

🎨 Responsive UI built with Tailwind CSS

🔔 Add-to-cart confirmation message

🛠️ Tech Stack

Technology &

Purpose

React.js

Building the user interface

React Router DOM

Page navigation and dynamic routes

Tailwind CSS

Responsive styling and UI design

Axios

Fetching product data from the API

DummyJSON API

Product data source

Context API

Global shopping cart state management

LocalStorage

Persisting cart data after page refresh

Clerk

User authentication

React Icons

Icons used throughout the application

Vite

Development server and build tool



💾 LocalStorage

Cart data is stored in the browser using LocalStorage.

const [products, setProducts] = useState(() => {
  const savedItem = localStorage.getItem("items");

  return savedItem ? JSON.parse(savedItem) : [];
});

useEffect(() => {
  localStorage.setItem("items", JSON.stringify(products));
}, [products]);

This allows cart items to remain available even after the page is refreshed.

🔌 API Integration

Product information is fetched using Axios from the DummyJSON API.

const api = axios.create({
  baseURL: "https://dummyjson.com/"
});

export const getItemData = (category) => {
  return api.get(`products/category/${category}`);
};

The application uses dynamic category URLs to request products based on the selected category.

Examples of categories available in the UI include:

Bags

Dresses

Tops

Heels

Jewellery

Perfume

Skin Care

Sunglasses

Watches


🧮 Cart Calculations

The cart automatically calculates:

Product Total

const total = Number(
  products
    .reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    .toFixed(2)
);

Tax

A 2% tax is calculated:

const taxcal = Number((total * 0.02).toFixed(2));

Grand Total

const grandTotal = Number(
  (total + taxcal).toFixed(2)
);

The order summary displays:

Product price

Shipping fee

Tax

Total amount



⚙️ Installation

1. Clone the repository

git clone <your-github-repository-url>

2. Open the project

cd fashionappreact

3. Install dependencies

npm install

4. Configure Clerk

Create a .env file in the project root and add your Clerk publishable key:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

Do not commit your .env file or expose private credentials.

5. Start the development server

npm run dev

The application will run locally using Vite.

🏗️ Build for Production

Create a production build with:

npm run build

Preview the production build with:

npm run preview

📚 What I Learned

Through this project, I practiced:

Building reusable React components

Managing state with useState

Managing side effects with useEffect

Sharing application state using Context API

Working with REST APIs using Axios

Handling dynamic routes with React Router

Using URL parameters for category-based product pages

Persisting application data using LocalStorage

Managing shopping cart state

Calculating cart totals dynamically

Implementing authentication with Clerk

Creating responsive layouts using Tailwind CSS

Building mobile navigation menus

Organizing a React application into components, pages, and API modules

🔮 Future Improvements

Possible future enhancements include:

🔎 Product search functionality

❤️ Wishlist / favourites

⭐ Product reviews

🛒 Cart item count in the navbar

💳 Real online payment integration

📦 Order history

👤 User-specific cart and order storage

🔍 Product filtering and sorting

📱 Further mobile UI improvements

🗄️ Backend and database integration

📧 Order confirmation emails

⚠️ Project Scope

This is a frontend-focused e-commerce project created for learning and portfolio purposes.

Product data is provided by DummyJSON.

Cart data is stored in browser LocalStorage.

Clerk is used for authentication.

The current Place Order button is a UI feature; there is no real payment or order-processing backend.

No real products or transactions are processed through the application.

👩‍💻 Author

Vaishnavi Kolhe
Frontend Developer | React.js | JavaScript | Python | SQL
>>>>>>> 358e663aa39325bc6b13eaeb73f41817f84bf057
