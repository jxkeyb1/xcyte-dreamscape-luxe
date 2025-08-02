-- Fix function search path security issues
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