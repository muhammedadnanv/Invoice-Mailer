import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PricingPlans = () => {
  const handleSubscribe = () => {
    window.location.href = "https://razorpay.com/payment-link/plink_PfmBQlo7TTvZKI";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Select the perfect plan for your business needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Basic Plan */}
          <Card className="relative border-2 border-gray-100 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Basic</CardTitle>
              <CardDescription>1 Day Access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹500</span>
                <span className="text-gray-500">.00</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>1 day access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Basic QR code generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubscribe}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary transform scale-105 shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <CardDescription>5 Days Access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹500</span>
                <span className="text-gray-500">.00</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>5 days access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Custom QR code design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Analytics dashboard</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubscribe}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Ultra Premium Plan */}
          <Card className="relative border-2 border-gray-100 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Ultra Premium</CardTitle>
              <CardDescription>10 Days Access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹500</span>
                <span className="text-gray-500">.00</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>10 days access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Multiple restaurant support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubscribe}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};