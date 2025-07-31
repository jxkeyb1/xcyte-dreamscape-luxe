import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Alpine Summit Jacket",
      price: 249,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Peak Performance Hoodie",
      price: 119,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      badge: "New"
    },
    {
      id: 3,
      name: "Mountain Trail Pants",
      price: 159,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
      badge: "Limited"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over £150"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Lifetime craftsmanship guarantee"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert styling assistance"
    },
    {
      icon: Star,
      title: "Exclusive Access",
      description: "Members-only collections"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-mountain pt-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            Premium Mountain Lifestyle
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Reach Your
            <span className="block text-primary">SUMMIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luxury apparel for those who dare to climb higher. Every piece crafted for peak performance and unmatched style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="luxury" size="lg" className="text-lg px-8 py-6">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 text-foreground hover:bg-primary/10">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most coveted pieces, designed for those who refuse to blend in
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      £{product.price}
                    </p>
                    <Button variant="luxury" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the Summit Club
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive access to new collections, styling tips, and member-only events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-background/10 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="luxury" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
