import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Product } from "@/components/ProductManager";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Outerwear", "Tops", "Bottoms", "Base Layers"];


  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
                  <Button 
                    key={category} 
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                      <div className="text-4xl">👕</div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {activeCategory === "All" ? "No Products Available" : `No ${activeCategory} Available`}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {products.length === 0 
                        ? "Use the 'Manage Products' tab to add your first product."
                        : `No products found in the ${activeCategory} category.`
                      }
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
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
                        <p className="text-2xl font-bold text-primary mb-2">
                          £{product.price}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
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
              )}
        </div>
      </div>
    </div>
  );
};

export default Shop;