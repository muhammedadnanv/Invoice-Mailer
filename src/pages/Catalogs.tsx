import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Catalogs = () => {
  const { toast } = useToast();
  const [catalog, setCatalog] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Success",
      description: "Catalog created successfully!",
    });
    
    setCatalog({
      name: "",
      description: "",
      price: "",
      imageUrl: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Catalog Builder</h1>
      <Card className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={catalog.name}
              onChange={(e) => setCatalog({ ...catalog, name: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={catalog.description}
              onChange={(e) => setCatalog({ ...catalog, description: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={catalog.price}
              onChange={(e) => setCatalog({ ...catalog, price: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="url"
              value={catalog.imageUrl}
              onChange={(e) => setCatalog({ ...catalog, imageUrl: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Create Catalog Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Catalogs;