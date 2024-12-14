import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Calendar, 
  ChefHat, 
  ClipboardList, 
  Coffee,
  DollarSign, 
  Pizza,
  Settings, 
  ShoppingBag,
  Utensils, 
  Users 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const menuItems = [
    {
      category: "Main Courses",
      items: [
        { name: "Grilled Salmon", price: 24.99, description: "Fresh Atlantic salmon with herbs", icon: <Utensils className="h-5 w-5" />, tags: ["Seafood", "Healthy"] },
        { name: "Classic Burger", price: 16.99, description: "Angus beef with premium toppings", icon: <Utensils className="h-5 w-5" />, tags: ["Popular"] },
        { name: "Margherita Pizza", price: 18.99, description: "Fresh mozzarella and basil", icon: <Pizza className="h-5 w-5" />, tags: ["Vegetarian"] },
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "Artisan Coffee", price: 4.99, description: "House-roasted beans", icon: <Coffee className="h-5 w-5" />, tags: ["Hot"] },
        { name: "Fresh Juice", price: 5.99, description: "Seasonal fruit selection", icon: <Coffee className="h-5 w-5" />, tags: ["Healthy"] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DineFlow Manager</h1>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reservations">Reservations</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">12 pending</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tables</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8/12</div>
                  <p className="text-xs text-muted-foreground">4 available</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reservations</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">For today</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-24 flex flex-col gap-2">
                <ClipboardList className="h-6 w-6" />
                New Order
              </Button>
              <Button className="h-24 flex flex-col gap-2" variant="outline">
                <ChefHat className="h-6 w-6" />
                Kitchen View
              </Button>
              <Button className="h-24 flex flex-col gap-2" variant="outline">
                <Calendar className="h-6 w-6" />
                Reservations
              </Button>
              <Button className="h-24 flex flex-col gap-2" variant="outline">
                <BarChart3 className="h-6 w-6" />
                Reports
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Orders Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Orders management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Menu Management</h2>
              <Button>
                <ChefHat className="mr-2 h-4 w-4" />
                Add New Item
              </Button>
            </div>

            <div className="grid gap-6">
              {menuItems.map((category, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                {item.icon}
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
                              <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reservations">
            <Card>
              <CardHeader>
                <CardTitle>Reservations Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reservations management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;