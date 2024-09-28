// /app/layout.tsx
"use client";

import React from 'react';
import Navbar from './components/Navbar';
import './styles/globals.css'; // Updated path to include styles folder

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Olympics 2024 Clone</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
