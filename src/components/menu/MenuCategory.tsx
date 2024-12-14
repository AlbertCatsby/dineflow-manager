import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Pizza, Utensils } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuCategoryProps {
  category: string;
  items: MenuItem[];
  isAdmin?: boolean;
  onEditItem?: (item: MenuItem) => void;
}

const MenuCategory = ({ category, items, isAdmin = false, onEditItem }: MenuCategoryProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Coffee":
        return <Coffee className="h-5 w-5" />;
      case "Pizza":
        return <Pizza className="h-5 w-5" />;
      default:
        return <Utensils className="h-5 w-5" />;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50">
        <CardTitle>{category}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {items.map((item, idx) => (
            <div key={idx} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex gap-2 mt-2">
                      {item.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">${item.price}</span>
                  {isAdmin && (
                    <Button variant="ghost" size="sm" onClick={() => onEditItem?.(item)}>
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCategory;