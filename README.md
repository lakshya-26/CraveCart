# CraveCart

# Overview
CraveCart is a dynamic food ordering web application built using the MERN stack, offering a seamless user experience with secure Stripe payment integration. Styled with Tailwind CSS and ShadCN, CraveCart delivers a modern, responsive design that ensures easy navigation and efficient ordering on any device.

# Features

<h3>User Management</h3>
<h4>User Registration and Login:</h4>
- Secure user authentication with Auth0 integration.
- Easy registration and login process for new and existing users.
Profile Management:
Users can view and edit their personal profiles.
Update account details such as name, contact information, and preferences.
Restaurant Search and Discovery
Advanced Search:

Search for restaurants by name, cuisine, or location.
Real-time search results as users type their queries.
Sort and Filter Options:

Sort restaurants by popularity, rating, or delivery time.
Filter by cuisine type, price range, and special offers.
Pagination:

Efficient pagination for large lists of restaurants.
Smooth navigation through multiple pages of search results.
Restaurant Management
Restaurant Profile:

Detailed restaurant profiles with images, menus, and customer reviews.
Owners can add images and update menu items through Cloudinary integration.
Menu Management:

Easily add, edit, or remove menu items.
Display item descriptions, prices, and special dietary information.
Shopping Cart and Checkout
Cart Management:

Add, remove, and update items in the shopping cart.
View real-time price updates and item totals.
Secure Checkout:

Checkout process powered by Stripe for secure payments.
Multiple payment methods supported for user convenience.
Order Management
Order Tracking:

Real-time order status updates from preparation to delivery.
Notifications for order progress and estimated delivery time.
Order History:

View past orders and reorder favorite meals quickly.
Access detailed order receipts and transaction history.
User Interface and Experience
Responsive Design:

Fully responsive layout using ShadCN and Tailwind CSS.
Optimized for mobile, tablet, and desktop devices.
Intuitive Navigation:

User-friendly interface with clear navigation paths.
Consistent design and branding across all pages.
Technology Stack
Frontend:

Built with React for dynamic and interactive user interfaces.
Utilizes React Hook Form for efficient form handling.
Backend:

Node.js and Express for a scalable and robust server environment.
MongoDB for flexible and reliable data storage.
Deployment:

Deployed on Render for high availability and performance.
Integration with Third-Party Services
Auth0 for Authentication:

Secure and scalable authentication solution.
Stripe for Payments:

Seamless and secure payment processing.
Cloudinary for Image Management:

Efficient image storage and retrieval with optimization features.
Additional Features
Favorite Restaurants:
Users can save favorite restaurants for quick access.
Promotions and Discounts:
Special offers and promotions available for users.
Installation
Prerequisites
Node.js and pnpm installed
Firebase CLI installed
Ollama account and downloaded
Getting Started
Clone the Repository:

git clone
https://github.com/debarshee2004/h4b_telemedevin.git
cd h4b_telemedevin
Install Dependencies:

pnpm install
Set Up Firebase:

Create a Firebase project in the Firebase console.
Configure Firebase in the app:
firebase init
Deploy AI Bot with Ollama:

Download and set up the Quen2:0.5b model via Ollama:
ollama pull qwen2:0.5b
Environment Variables:

Create a .env file in the root directory and add the following configurations:
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
AI_BOT_URL=http://localhost:your_bot_port
Run the Application:

First, run the development server:

npm run dev
#or
yarn dev
#or
pnpm dev
# or
bun dev
Contributions
Frontend: Debarshee Chakraborty and Subhadip Santra

Backend: Debasmita Goswami and Ayushi Srivastava

License
The h4b_telemedevin application is distributed under the MIT License, which means you're free to use, modify, and distribute the code as per the terms of the license.

Conclusion
The Next Firebase GenKit Telemedicine App represents a significant advancement in healthcare accessibility and efficiency. By integrating Firebase for robust backend support and deploying an AI bot based on the Quen2:0.5b model via Ollama, the app empowers users with quick and accurate initial diagnoses. This not only reduces the workload on healthcare professionals but also provides patients with timely medical insights without the need for physical consultations.
