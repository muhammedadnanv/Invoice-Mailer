import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RegisterForm } from "@/components/RegisterForm";
import ProductCatalogMailer from "@/components/ProductCatalogMailer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <RegisterForm />
      <ProductCatalogMailer />
    </main>
  );
};

export default Index;