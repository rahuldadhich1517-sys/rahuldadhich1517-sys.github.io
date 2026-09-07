import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import { Footer } from './sections/Footer';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col sharp-corners">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
