import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Target, Users, Award, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Mountain,
      title: "Peak Excellence",
      description: "Every piece is crafted to help you reach new heights in style and performance."
    },
    {
      icon: Target,
      title: "Precision Design",
      description: "Meticulously designed with attention to every detail for the modern adventurer."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of individuals who dare to challenge their limits."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest materials and craftsmanship in every garment."
    }
  ];

  const team = [
    {
      name: "Alex Summit",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      bio: "Former alpine guide turned fashion innovator, bringing mountain expertise to luxury streetwear."
    },
    {
      name: "Maya Peak",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=300",
      bio: "Award-winning designer with a passion for functional luxury and sustainable fashion."
    },
    {
      name: "Jordan Ridge",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      bio: "Ensuring every XCYTE piece meets our exacting standards from concept to customer."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-mountain flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Born from the peaks, crafted for excellence
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">The XCYTE Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              XCYTE was born from a simple belief: that the spirit of the mountains should inspire 
              everything we create. We're not just a clothing brand – we're a movement for those who 
              refuse to settle for ordinary. Every thread, every stitch, every design choice is made 
              with the understanding that our customers demand excellence in every aspect of their lives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the boardroom to the base camp, XCYTE represents the pinnacle of luxury and performance. 
              We believe that reaching your summit – whatever that may be – requires gear that's as 
              ambitious as you are.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border text-center hover:shadow-luxury transition-all duration-500">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Empty team cards for you to fill later */}
              {[1, 2, 3].map((index) => (
                <Card key={index} className="bg-card border-border overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-64 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Team Member {index}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Name</h3>
                      <p className="text-primary font-medium mb-3">Role</p>
                      <p className="text-muted-foreground text-sm">Bio description</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-foreground mb-6">Follow Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay connected with the XCYTE community and see what's happening behind the scenes.
            </p>
            <div className="flex gap-6 justify-center">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-background border-2 border-border rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Instagram className="h-8 w-8 text-foreground group-hover:text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">Instagram</p>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-background border-2 border-border rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Facebook className="h-8 w-8 text-foreground group-hover:text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">Facebook</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-luxury">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Reach Your Peak?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the XCYTE community and discover what it means to live without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button variant="luxury" size="lg">
                  Explore Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;