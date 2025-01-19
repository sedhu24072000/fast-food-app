FastFood App

A web application that allows users to browse a menu, order food, prioritize their orders, and track the order status. The app leverages React Router for advanced routing functionality, including nested routes, dynamic routing, and programmatic navigation. Tailwind CSS is used for styling to ensure a responsive and user-friendly design.

Features

Search Orders: Track orders using an Order ID.

Menu Browsing: Browse and order food items from the menu.

Add to Cart: Add selected food items to the cart and proceed to checkout.

Order Prioritization: Prioritize orders with additional charges.

Order Tracking: Use the Order ID to track the status of the order.

Dynamic Routing: Use React Router for handling routes with dynamic parameters, such as Order IDs.

Programmatic Navigation: Implemented programmatic navigation to redirect users after actions like placing an order.

Tech Stack
Frontend: React.js
State Management: Redux
APIs: MockAPI (for menu and order data)
Styling: Tailwind CSS
Routing: React Router (for advanced routing like dynamic routes, nested routes, and programmatic navigation)
Other Libraries: React Router

How It Works

Homepage:
The app starts with a Navigation bar that contains a logo and a Search bar to track orders using an Order ID.
Users can enter their name in an input field to start the process of ordering food.

Menu Page:
After entering the name, users are redirected to the Menu page via React Router's dynamic routes.
Food items are fetched from the Menu API and displayed, with the option to Add to Cart.

Cart Page:
The cart page displays all selected items and allows users to review their order before proceeding to checkout.
The Order Page is accessible programmatically after the Order button is clicked.

Order Page:
After clicking Order, the user is redirected to the Order Page to specify the delivery address and can also prioritize their order with additional charges.
The Order ID is provided, which can be used to track the order status.

Order Tracking:
Users can enter the Order ID in the Search bar to track their order.

React Router’s programmatic navigation is used to redirect users to different pages based on their actions.

Project Link : https://fast-food-app-react.netlify.app/menu
