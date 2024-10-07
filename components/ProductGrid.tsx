'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      // Replace with actual API call
      const dummyProducts: Product[] = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
        // Add more dummy products as needed
      ];
      setProducts(dummyProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}