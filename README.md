# CraveCart

## Overview
CraveCart is a dynamic food ordering web application built using the MERN stack, offering a seamless user experience with secure Stripe payment integration. Styled with Tailwind CSS and ShadCN, CraveCart delivers a modern, responsive design that ensures easy navigation and efficient ordering on any device.

## Features

**User Management**
**User Registration and Login:**
- Secure user authentication with Auth0 integration.
- Easy registration and login process for new and existing users.
  
**Profile Management:**
- Users can view and edit their personal profiles.
- Update account details such as name, contact information, and preferences.
- Restaurant Search and Discovery
  
**Advanced Search:**
- Search for restaurants by name, cuisine, or location.
- Real-time search results as users type their queries.
  
**Sort and Filter Options:**
- Sort restaurants by popularity, rating, or delivery time.
- Filter by cuisine type, price range, and special offers.
  
**Pagination:**
- Efficient pagination for large lists of restaurants.
- Smooth navigation through multiple pages of search results.
- Restaurant Management
  
**Restaurant Profile:**
- Detailed restaurant profiles with images, menus, and customer reviews.
- Owners can add images and update menu items through Cloudinary integration.
  
**Menu Management:**
- Easily add, edit, or remove menu items.
- Display item descriptions, prices, and special dietary information.
- Shopping Cart and Checkout
  
**Cart Management:**
- Add, remove, and update items in the shopping cart.
- View real-time price updates and item totals.
  
**Secure Checkout:**
- Checkout process powered by Stripe for secure payments.
- Multiple payment methods supported for user convenience.
- Order Management
  
**Order Tracking:**
- Real-time order status updates from preparation to delivery.
- Notifications for order progress and estimated delivery time.
  
**Order History:**
- View past orders and reorder favorite meals quickly.
- User Interface and Experience.

**Responsive Design:**
- Fully responsive layout using ShadCN and Tailwind CSS.
- Optimized for mobile, tablet, and desktop devices.
  
**Intuitive Navigation:**
- User-friendly interface with clear navigation paths.
- Consistent design and branding across all pages.

## Technology Stack

**Frontend:**
- Built with React for dynamic and interactive user interfaces.
- Utilizes React Hook Form for efficient form handling.
  
**Backend:**
- Node.js and Express for a scalable and robust server environment.
- MongoDB for flexible and reliable data storage.
  
**Deployment:**
- Deployed on Render for high availability and performance.
- Integration with Third-Party Services
  
**Auth0 for Authentication:**
- Secure and scalable authentication solution.
  
**Stripe for Payments:**
- Seamless and secure payment processing.

**Cloudinary for Image Management:**
- Efficient image storage and retrieval with optimization features.

## Installation

### Prerequisites

- Node.js and npm installed
- Auth0 configured
- Cloudinary configured
- Stripe configured
  
### Getting Started

**Frontend**

1. **Clone the Repository:**
    - git clone
    - 
    ```bash
    https://github.com/lakshya-26/CraveCart
    ```
    ```bash
    cd client
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```
  
3. **Environment Variables:**

    - Create a .env file in the root directory and add the following configurations:
    ```env
    VITE_AUTH0_DOMAIN=auth0domain
    VITE_AUTH0_CLIENT_ID=auth0clientid
    VITE_AUTH0_CALLBACK_URL=auth0callbackurl
    VITE_AUTH0_AUDIENCE=audiencename
    VITE_API_BASE_URL=serverurl
    ```

4. **Run the Application:**

    First, run the development server:
    ```bash
    npm run dev
    #or
    yarn dev
    #or
    pnpm dev
    # or
    bun dev
    ```

**Backend** 

1. **Clone the Repository:**
    - git clone
    - 
    ```bash
    https://github.com/lakshya-26/CraveCart
    ```
    ```bash
    cd server
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```
    
3. **Environment Variables:**

    - Create a .env file in the root directory and add the following configurations:
    ```env
    MONGODB_CONNECTION_STRING=mongouri
    AUTH0_AUDIENCE=audiencename
    AUTH0_ISSUER_BASE_URL=baseurl
    CLOUDINARY_CLOUD_NAME=name
    CLOUDINARY_API_KEY=apikey
    CLOUDINARY_API_SECRET=secret
    STRIPE_API_KEY=apikey
    FRONTEND_URL=frontendurl
    STRIPE_WEBHOOK_KEY_SECRET=stripehookkwysecret
    ```

4. **Run the Application:**

    First, run the development server:
    ```bash
    npm run dev
    #or
    yarn dev
    #or
    pnpm dev
    # or
    bun dev
    ```
    
## License
The CraveCart application is distributed under the MIT License, which means you're free to use, modify, and distribute the code as per the terms of the license.

Conclusion
CraveCart is a cutting-edge food ordering application that revolutionizes the way users connect with their favorite restaurants. Built with a robust tech stack including React, Node.js, and MongoDB, CraveCart offers seamless user experiences with features like advanced search, secure checkout via Stripe, and real-time order tracking. With integrations such as Auth0 for authentication and Cloudinary for image management, CraveCart ensures security and efficiency at every step. Its responsive design makes it accessible across all devices, providing a convenient and enjoyable food ordering process. Explore CraveCart and experience a new standard in food delivery.
