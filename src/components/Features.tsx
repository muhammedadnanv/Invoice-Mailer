import { motion } from "framer-motion";
import { Mail, Link, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Automated Invoicing",
    description: "Set up recurring invoices and let our system handle the delivery automatically.",
  },
  {
    icon: <Link className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Easy Integration",
    description: "Connect with your existing tools and workflows without any hassle.",
  },
  {
    icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Product Catalog",
    description: "Send your product catalogs to multiple customers with just a few clicks.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to manage your invoicing process
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="mb-4 sm:mb-6 text-primary"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};