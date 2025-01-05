import { motion } from "framer-motion";
import { Mail, DollarSign, FileText, Link } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Automated Invoicing",
    description: "Set up recurring invoices and let our system handle the delivery automatically.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Custom Templates",
    description: "Create beautiful, branded invoice templates that reflect your business identity.",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Payment Integration",
    description: "Seamlessly integrate with popular payment platforms for faster transactions.",
  },
  {
    icon: <Link className="h-8 w-8" />,
    title: "Easy Integration",
    description: "Connect with your existing tools and workflows without any hassle.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-secondary text-lg">Everything you need to manage your invoicing process</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};