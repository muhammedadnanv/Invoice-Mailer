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
      // Submit form data
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/xyzyqlzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Send confirmation email using Resend API
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer re_C1Szqahu_3Xhg7h52vqG6v4hP3F5o5ebX`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: formData.get("email"),
            subject: "Registration Confirmation - Invoice Mailer",
            html: `
              <h1>Thank you for registering!</h1>
              <p>We have received your registration for Invoice Mailer.</p>
              <p>Please wait for 10 days, and we will send your account details to this email address.</p>
              <p>If you have any questions, please don't hesitate to contact us.</p>
            `,
          }),
        });

        if (emailResponse.ok) {
          toast({
            title: "Registration successful!",
            description: "Please check your email for confirmation. We will send your account details within 10 days.",
          });
          window.location.href = "https://rzp.io/rzp/cuNw8HlI";
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
    <section id="register" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Register Your Business
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Label htmlFor="businessName">Business Name</Label>
              <Input required id="businessName" name="businessName" placeholder="Enter your business name" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label htmlFor="email">Email</Label>
              <Input required type="email" id="email" name="email" placeholder="Enter your email" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="phone">Phone Number</Label>
              <Input required type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="industry">Industry</Label>
              <Input required id="industry" name="industry" placeholder="Enter your industry" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
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