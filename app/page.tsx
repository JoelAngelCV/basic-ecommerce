import { ProductGrid } from '@/components/ProductGrid';
import { CategoryList } from '@/components/CategoryList';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <CategoryList />
      <ProductGrid />
    </div>
  );
}