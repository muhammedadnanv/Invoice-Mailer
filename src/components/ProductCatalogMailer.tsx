import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Upload, Mail } from "lucide-react";

const ProductCatalogMailer = () => {
  const [emails, setEmails] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here we would normally make an API call to send the catalog
      // For demo purposes, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      toast({
        title: "Success!",
        description: "Product catalog has been sent to the specified email addresses.",
      });

      setEmails("");
      setFile(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send product catalog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Send Product Catalog
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <Label htmlFor="emails">Email Addresses</Label>
              <Textarea
                required
                id="emails"
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Enter email addresses (one per line)"
                className="min-h-[120px]"
              />
              <p className="text-sm text-gray-500">Enter multiple email addresses, one per line</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <Label htmlFor="catalog">Product Catalog (PDF)</Label>
              <div className="flex items-center space-x-2">
                <Input
                  type="file"
                  id="catalog"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById("catalog")?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {file ? file.name : "Upload Catalog"}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 md:py-6 rounded-lg transition-colors"
                disabled={isSubmitting || !file || !emails.trim()}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Catalog
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalogMailer;