import React from "react";
import ReactDOM from "react-dom";
// Import the ClerkProvider
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

// Get the publishable key from your environment variables
const clerkPubKey = "pk_test_ZW5kbGVzcy1jaGltcC02MS5jbGVyay5hY2NvdW50cy5kZXYk";

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.render(
  // 1. Wrap your entire application with ClerkProvider
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>,
  document.getElementById("root")
);