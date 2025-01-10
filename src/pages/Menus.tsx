import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Menus = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const [menu, setMenu] = useState({
    name: "",
    description: "",
  });

  const { data: menus, isLoading } = useQuery({
    queryKey: ['menus', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menus')
        .select('*')
        .eq('user_id', user?.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('menus')
        .insert([
          {
            name: menu.name,
            description: menu.description,
            user_id: user?.id,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Menu created successfully!",
      });
      
      setMenu({
        name: "",
        description: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create menu. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Menu Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Menu</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Menu Name</Label>
              <Input
                id="name"
                value={menu.name}
                onChange={(e) => setMenu({ ...menu, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={menu.description}
                onChange={(e) => setMenu({ ...menu, description: e.target.value })}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Create Menu
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Menus</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : menus?.length === 0 ? (
            <p>No menus created yet.</p>
          ) : (
            <div className="space-y-4">
              {menus?.map((menu) => (
                <Card key={menu.id} className="p-4">
                  <h3 className="font-semibold">{menu.name}</h3>
                  <p className="text-sm text-gray-600">{menu.description}</p>
                  {menu.qr_code_url && (
                    <img src={menu.qr_code_url} alt="QR Code" className="mt-2 w-24 h-24" />
                  )}
                </Card>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Menus;