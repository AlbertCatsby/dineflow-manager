import { useState } from "react";
import MenuCategory from "./MenuCategory";
import AddItemDialog from "./AddItemDialog";
import { MenuItem } from "@/types/menu";

interface MenuViewProps {
  isAdmin?: boolean;
}

const MenuView = ({ isAdmin = false }: MenuViewProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      category: "Main Courses",
      name: "Grilled Salmon",
      price: 24.99,
      description: "Fresh Atlantic salmon with herbs",
      icon: "Utensils",
      tags: ["Seafood", "Healthy"],
    },
    {
      category: "Main Courses",
      name: "Classic Burger",
      price: 16.99,
      description: "Angus beef with premium toppings",
      icon: "Utensils",
      tags: ["Popular"],
    },
    {
      category: "Beverages",
      name: "Artisan Coffee",
      price: 4.99,
      description: "House-roasted beans",
      icon: "Coffee",
      tags: ["Hot"],
    },
  ]);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const handleAddItem = (newItem: MenuItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  const handleEditItem = (item: MenuItem) => {
    console.log("Editing item:", item);
    // Implement edit functionality
  };

  return (
    <div className="space-y-6">
      {isAdmin && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu Management</h2>
          <AddItemDialog categories={categories} onAddItem={handleAddItem} />
        </div>
      )}

      <div className="grid gap-6">
        {categories.map((category) => (
          <MenuCategory
            key={category}
            category={category}
            items={menuItems.filter(item => item.category === category)}
            isAdmin={isAdmin}
            onEditItem={handleEditItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuView;