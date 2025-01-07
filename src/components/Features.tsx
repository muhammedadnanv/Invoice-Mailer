import { motion } from "framer-motion";
import { Mail, Link, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Automated Invoicing",
    description: "Set up recurring invoices and let our system handle the delivery automatically.",
  },
  {
    icon: <Link className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Easy Integration",
    description: "Connect with your existing tools and workflows without any hassle.",
  },
  {
    icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Product Catalog",
    description: "Send your product catalogs to multiple customers with just a few clicks.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-8 sm:py-12 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to manage your invoicing process
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="mb-3 sm:mb-4 text-primary"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};