-- Insert sample products (only run this after you have an admin user)
-- You'll need to replace 'YOUR_ADMIN_USER_ID' with an actual admin user ID

insert into public.products (name, description, price, image_url, stock, category) values
  ('Wireless Headphones', 'Premium noise-cancelling wireless headphones with 30-hour battery life', 299.99, '/placeholder.svg?height=400&width=400', 50, 'Electronics'),
  ('Smart Watch', 'Fitness tracking smartwatch with heart rate monitor and GPS', 399.99, '/placeholder.svg?height=400&width=400', 30, 'Electronics'),
  ('Laptop Backpack', 'Durable water-resistant backpack with padded laptop compartment', 79.99, '/placeholder.svg?height=400&width=400', 100, 'Accessories'),
  ('Mechanical Keyboard', 'RGB mechanical gaming keyboard with customizable keys', 149.99, '/placeholder.svg?height=400&width=400', 45, 'Electronics'),
  ('Portable Charger', '20000mAh fast-charging portable power bank', 49.99, '/placeholder.svg?height=400&width=400', 200, 'Accessories'),
  ('Wireless Mouse', 'Ergonomic wireless mouse with precision tracking', 59.99, '/placeholder.svg?height=400&width=400', 75, 'Electronics'),
  ('USB-C Hub', '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader', 89.99, '/placeholder.svg?height=400&width=400', 60, 'Accessories'),
  ('Desk Lamp', 'LED desk lamp with adjustable brightness and color temperature', 69.99, '/placeholder.svg?height=400&width=400', 40, 'Home'),
  ('Phone Stand', 'Adjustable aluminum phone and tablet stand', 29.99, '/placeholder.svg?height=400&width=400', 150, 'Accessories'),
  ('Cable Organizer', 'Silicone cable management clips set of 10', 14.99, '/placeholder.svg?height=400&width=400', 300, 'Accessories');
