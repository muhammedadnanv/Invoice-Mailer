import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Welcome to Imalier
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-3 sm:space-y-4 mb-8 sm:mb-10 px-4 sm:px-0"
          >
            <p className="leading-relaxed">With Imalier, sending invoices has never been easier!</p>
            <p className="leading-relaxed">All you need to do is type in your details and your client's information, then simply click 'Send Invoice.'</p>
            <p className="leading-relaxed">In just one click, the invoice is automatically generated and sent directly to your customer's email.</p>
            <p className="leading-relaxed">No more manual effort – everything is automated to save you time and ensure seamless communication with your clients.</p>
            <p className="font-semibold">It's that simple!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              onClick={() => {
                const element = document.getElementById('register');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Get Started with Registration"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              onClick={() => {
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Learn More About Features"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 [mask-image:radial-gradient(white,transparent_70%)]" aria-hidden="true" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-secondary/20 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
};