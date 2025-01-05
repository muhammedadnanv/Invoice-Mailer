import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Automate Your Invoice Delivery
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-secondary space-y-4 mb-8"
          >
            <p>With Invoice Mailer, sending invoices has never been easier!</p>
            <p>All you need to do is type in your details and your client's information, then simply click 'Send Invoice.'</p>
            <p>In just one click, the invoice is automatically generated and sent directly to your customer's email.</p>
            <p>No more manual effort – everything is automated to save you time and ensure seamless communication with your clients.</p>
            <p className="font-semibold">It's that simple!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 [mask-image:radial-gradient(white,transparent_70%)]" />
    </div>
  );
};