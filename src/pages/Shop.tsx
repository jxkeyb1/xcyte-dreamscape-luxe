import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Alpine Summit Jacket",
      price: 299,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      category: "Outerwear",
      featured: true
    },
    {
      id: 2,
      name: "Peak Performance Hoodie",
      price: 149,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      category: "Tops"
    },
    {
      id: 3,
      name: "Mountain Trail Pants",
      price: 189,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
      category: "Bottoms"
    },
    {
      id: 4,
      name: "Summit Series T-Shirt",
      price: 79,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Tops"
    },
    {
      id: 5,
      name: "Expedition Base Layer",
      price: 129,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
      category: "Base Layers"
    },
    {
      id: 6,
      name: "Alpine Shorts",
      price: 99,
      image: "https://images.unsplash.com/photo-1506629905607-83d3d1fb5f36?w=400",
      category: "Bottoms"
    }
  ];

  const categories = ["All", "Outerwear", "Tops", "Bottoms", "Base Layers"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-64 bg-gradient-mountain flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Peak Performance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our premium collection designed for those who reach new heights
            </p>
          </div>
        </section>

        {/* Shop Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button key={category} variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-all duration-500">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    ${product.price}
                  </p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button variant="luxury" className="w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;