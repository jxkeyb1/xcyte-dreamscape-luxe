import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/14b39f76-5dac-41d9-aa18-8102ff487750.png" 
              alt="XCYTE" 
              className="h-10 w-auto filter invert brightness-0 contrast-100"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button 
                  variant="nav" 
                  className={`relative ${isActive(item.path) ? 'text-primary' : ''}`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
            
            {/* Cart Button */}
            <Link to="/cart">
              <Button variant="luxury" size="sm" className="relative">
                <ShoppingBag className="h-4 w-4" />
                Cart
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="nav" 
                    className={`w-full justify-start ${isActive(item.path) ? 'text-primary' : ''}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                <Button variant="luxury" className="w-full relative">
                  <ShoppingBag className="h-4 w-4" />
                  Cart
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;