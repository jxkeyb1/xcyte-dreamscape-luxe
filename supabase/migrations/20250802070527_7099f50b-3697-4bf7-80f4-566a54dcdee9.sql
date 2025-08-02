-- Add discount and sale_price columns to products table
ALTER TABLE public.products 
ADD COLUMN discount_percentage INTEGER DEFAULT 0,
ADD COLUMN sale_price NUMERIC;

-- Create promo_codes table
CREATE TABLE public.promo_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  discount_percentage INTEGER NOT NULL CHECK (discount_percentage >= 0 AND discount_percentage <= 100),
  discount_amount NUMERIC,
  minimum_order_value NUMERIC DEFAULT 0,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  active BOOLEAN NOT NULL DEFAULT true,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on promo_codes table
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;

-- Create policies for promo_codes
CREATE POLICY "Anyone can view active promo codes" 
ON public.promo_codes 
FOR SELECT 
USING (active = true AND (expires_at IS NULL OR expires_at > now()));

CREATE POLICY "Admins can manage promo codes" 
ON public.promo_codes 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for promo_codes updated_at
CREATE TRIGGER update_promo_codes_updated_at
BEFORE UPDATE ON public.promo_codes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to calculate discounted price
CREATE OR REPLACE FUNCTION public.calculate_sale_price()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.discount_percentage > 0 THEN
    NEW.sale_price = NEW.price * (1 - NEW.discount_percentage::NUMERIC / 100);
  ELSE
    NEW.sale_price = NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically calculate sale_price
CREATE TRIGGER calculate_product_sale_price
BEFORE INSERT OR UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.calculate_sale_price();