import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RegisterForm } from "@/components/RegisterForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <RegisterForm />
    </main>
  );
};

export default Index;