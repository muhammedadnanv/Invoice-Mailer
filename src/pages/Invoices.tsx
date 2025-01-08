import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendInvoiceEmail } from "@/utils/email";

const Invoices = () => {
  const { toast } = useToast();
  const [invoice, setInvoice] = useState({
    clientName: "",
    clientEmail: "",
    amount: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await sendInvoiceEmail(
      invoice.clientEmail,
      invoice.clientName,
      invoice.amount,
      invoice.description
    );

    if (success) {
      toast({
        title: "Success",
        description: "Invoice sent successfully!",
      });
      setInvoice({
        clientName: "",
        clientEmail: "",
        amount: "",
        description: "",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Invoice Builder</h1>
      <Card className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={invoice.clientName}
              onChange={(e) => setInvoice({ ...invoice, clientName: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="clientEmail">Client Email</Label>
            <Input
              id="clientEmail"
              type="email"
              value={invoice.clientEmail}
              onChange={(e) => setInvoice({ ...invoice, clientEmail: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={invoice.amount}
              onChange={(e) => setInvoice({ ...invoice, amount: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={invoice.description}
              onChange={(e) => setInvoice({ ...invoice, description: e.target.value })}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Invoice
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Invoices;