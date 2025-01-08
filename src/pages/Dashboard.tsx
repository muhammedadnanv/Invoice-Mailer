import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Package, Menu } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Business Management Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <FileText className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Invoice Builder</h2>
          <p className="text-gray-600 mb-4">Create and send professional invoices to your clients</p>
          <Button onClick={() => navigate("/invoices")} className="w-full">
            Manage Invoices
          </Button>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Package className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Product Catalog</h2>
          <p className="text-gray-600 mb-4">Design and share your product catalogs</p>
          <Button onClick={() => navigate("/catalogs")} className="w-full">
            Manage Catalogs
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Menu className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Menu Builder</h2>
          <p className="text-gray-600 mb-4">Create digital menus with QR codes</p>
          <Button onClick={() => navigate("/menus")} className="w-full">
            Manage Menus
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;