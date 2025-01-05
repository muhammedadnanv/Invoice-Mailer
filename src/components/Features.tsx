import { motion } from "framer-motion";
import { Mail, Link } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Automated Invoicing",
    description: "Set up recurring invoices and let our system handle the delivery automatically.",
  },
  {
    icon: <Link className="h-8 w-8" />,
    title: "Easy Integration",
    description: "Connect with your existing tools and workflows without any hassle.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-secondary text-lg"
          >
            Everything you need to manage your invoicing process
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="mb-4 text-primary"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};