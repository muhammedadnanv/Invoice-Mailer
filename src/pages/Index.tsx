import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RegisterForm } from "@/components/RegisterForm";
import { PricingPlans } from "@/components/PricingPlans";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="flex flex-col gap-0">
        <Hero />
        <Features />
        <PricingPlans />
        <RegisterForm />
      </div>
    </main>
  );
};

export default Index;