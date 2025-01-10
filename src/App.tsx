import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Catalogs from "./pages/Catalogs";
import Menus from "./pages/Menus";

const queryClient = new QueryClient();

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route 
                    path="/sign-in/*" 
                    element={
                      <div className="min-h-screen flex items-center justify-center p-4">
                        <div className="w-full max-w-md">
                          <SignIn routing="path" path="/sign-in" />
                        </div>
                      </div>
                    } 
                  />
                  <Route 
                    path="/sign-up/*" 
                    element={
                      <div className="min-h-screen flex items-center justify-center p-4">
                        <div className="w-full max-w-md">
                          <SignUp routing="path" path="/sign-up" />
                        </div>
                      </div>
                    } 
                  />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/invoices" 
                    element={
                      <ProtectedRoute>
                        <Invoices />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/catalogs" 
                    element={
                      <ProtectedRoute>
                        <Catalogs />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/menus" 
                    element={
                      <ProtectedRoute>
                        <Menus />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
            </div>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </TooltipProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
}

export default App;