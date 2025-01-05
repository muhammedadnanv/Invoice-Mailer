import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/xyzyqlzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Registration successful!",
          description: "Redirecting to payment...",
        });
        window.location.href = "https://rzp.io/rzp/cuNw8HlI";
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Register Your Business</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input required id="businessName" name="businessName" placeholder="Enter your business name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input required type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input required type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input required id="industry" name="industry" placeholder="Enter your industry" />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register Now"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};