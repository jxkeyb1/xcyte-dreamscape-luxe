-- Fix function search path security issues by recreating trigger and function
DROP TRIGGER IF EXISTS calculate_product_sale_price ON public.products;
DROP FUNCTION IF EXISTS public.calculate_sale_price();

CREATE OR REPLACE FUNCTION public.calculate_sale_price()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  IF NEW.discount_percentage > 0 THEN
    NEW.sale_price = NEW.price * (1 - NEW.discount_percentage::NUMERIC / 100);
  ELSE
    NEW.sale_price = NULL;
  END IF;
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER calculate_product_sale_price
BEFORE INSERT OR UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.calculate_sale_price();