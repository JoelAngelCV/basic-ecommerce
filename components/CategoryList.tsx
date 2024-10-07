'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  slug: string;
}

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      // Replace with actual API call
      const dummyCategories: Category[] = [
        { id: 1, name: 'Electronics', slug: 'electronics' },
        { id: 2, name: 'Clothing', slug: 'clothing' },
        { id: 3, name: 'Books', slug: 'books' },
        { id: 4, name: 'Home & Garden', slug: 'home-garden' },
      ];
      setCategories(dummyCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}