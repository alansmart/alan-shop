import React from "react";
import landing from "./landing.css";
const LandingPage = () => {
  return (
    <div className="text-center bg-gray-100 p-6">
      <header className="bg-blue-600 text-white py-20">
        <h1 className="text-4xl font-bold">Welcome to my shopping cart app</h1>
        <p className="mt-4 text-lg">Your one-stop solution for all your shopping needs.</p>
        <a href="#signup" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded">
          Get Started
        </a>
      </header>
      <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside">
          <li>Easy browsing feature</li>
          <li>Secure checkout</li>
          <li>Order tracking</li>
        </ul>
      </section>
      <section className="mt-10 bg-white p-6 rounded-lg shadow-md" id="signUp">
        <h2 className="text-2xl font-semibold">Join us now</h2>
        <form>
          <input type="text" placeholder="Enter your name" className="border rounded px-4 py-2 mt-4" />
          <input type="email" placeholder="Enter your email" className="border rounded px-4 py-2 mt-4" />
          <button type="submit" className="ml-2 bg-blue-600 text-white py-2 px-4 rounded">Sign Up</button>
        </form>
      </section>
      <footer className="mt-10 bg-gray-800 text-white py-4">
        <p>&copy; 2024 Your Shopping Cart App</p>
      </footer>
    </div>
  );
};

export default LandingPage;
