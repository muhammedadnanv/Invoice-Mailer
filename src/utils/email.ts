import { toast } from "@/hooks/use-toast";

export const sendInvoiceEmail = async (
  email: string,
  clientName: string,
  amount: string,
  description: string
) => {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "invoices@yourdomain.com",
        to: email,
        subject: `Invoice for ${clientName}`,
        html: `
          <h1>Invoice for ${clientName}</h1>
          <p>Amount: $${amount}</p>
          <p>Description:</p>
          <p>${description}</p>
          <p>Please process this payment at your earliest convenience.</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send invoice email");
    }

    return true;
  } catch (error) {
    console.error("Error sending invoice email:", error);
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to send invoice email. Please try again later.",
    });
    return false;
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "welcome@yourdomain.com",
        to: email,
        subject: "Welcome to Our Platform!",
        html: `
          <h1>Welcome ${name}!</h1>
          <p>Thank you for registering with us. We're excited to have you on board!</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send welcome email");
    }

    return true;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to send welcome email. Please try again later.",
    });
    return false;
  }
};