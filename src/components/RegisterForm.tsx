import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer re_C1Szqahu_3Xhg7h52vqG6v4hP3F5o5ebX`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: formData.get("email"),
            subject: "Registration Confirmation - Imalier",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #333; text-align: center;">Thank you for registering!</h1>
                <p style="color: #666; font-size: 16px; line-height: 1.5;">We have received your registration for Imalier.</p>
                <p style="color: #666; font-size: 16px; line-height: 1.5;">Please wait for 10 days, and we will send your account details to this email address.</p>
                <p style="color: #666; font-size: 16px; line-height: 1.5;">If you have any questions, please don't hesitate to contact us.</p>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          toast({
            title: "Registration successful!",
            description: "Please check your email for confirmation. We will send your account details within 10 days.",
          });
          window.location.href = "https://razorpay.com/payment-link/plink_PfmBQlo7TTvZKI";
        } else {
          throw new Error("Failed to send confirmation email");
        }
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Register Your Business
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <Label htmlFor="businessName" className="text-sm sm:text-base">Business Name</Label>
              <Input 
                required 
                id="businessName" 
                name="businessName" 
                placeholder="Enter your business name"
                className="w-full px-3 sm:px-4 py-2 text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input 
                required 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
              <Input 
                required 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number"
                className="w-full px-3 sm:px-4 py-2 text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="industry" className="text-sm sm:text-base">Industry</Label>
              <Input 
                required 
                id="industry" 
                name="industry" 
                placeholder="Enter your industry"
                className="w-full px-3 sm:px-4 py-2 text-base"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Register Now"}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};