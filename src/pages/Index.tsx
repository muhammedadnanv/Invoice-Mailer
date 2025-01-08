import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RegisterForm } from "@/components/RegisterForm";
import { PricingPlans } from "@/components/PricingPlans";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <PricingPlans />
      <RegisterForm />
    </main>
  );
};

export default Index;