import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Shop = () => {
  const products: any[] = []; // Empty products array

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

          {/* Products Grid - Empty State */}
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <div className="text-4xl">👕</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Collection Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're curating an exceptional collection of premium pieces. 
                  Subscribe to be the first to know when they arrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="luxury">
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          ) : (
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
                      £{product.price}
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