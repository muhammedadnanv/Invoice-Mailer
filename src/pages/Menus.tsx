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
import { Loader2 } from "lucide-react";

const Menus = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const [menu, setMenu] = useState({
    name: "",
    description: "",
  });

  const { data: menus, isLoading, refetch } = useQuery({
    queryKey: ['menus', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menus')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });
      
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
      
      refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create menu. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Menu Builder</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <Card className="p-4 md:p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create New Menu</h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Menu Name</Label>
              <Input
                id="name"
                value={menu.name}
                onChange={(e) => setMenu({ ...menu, name: e.target.value })}
                className="w-full"
                placeholder="Enter menu name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={menu.description}
                onChange={(e) => setMenu({ ...menu, description: e.target.value })}
                className="w-full min-h-[100px]"
                placeholder="Enter menu description"
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Create Menu
            </Button>
          </form>
        </Card>

        <Card className="p-4 md:p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Menus</h2>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : menus?.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No menus created yet.</p>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {menus?.map((menu) => (
                <Card key={menu.id} className="p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{menu.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{menu.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Scans: {menu.scan_count || 0}</span>
                    {menu.qr_code_url && (
                      <img 
                        src={menu.qr_code_url} 
                        alt="QR Code" 
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>
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