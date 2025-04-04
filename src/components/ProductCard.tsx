import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div key ={product.id} className='p-4 border rounded shadow-lg'>
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-48 object-cover'
      />
      <h3 className='text-xl font-bold'>{product.name}</h3>
      <p className='text-gray-600'>{product.description}</p>
      <p className='text-lg font-semibold'>${product.price.toFixed(2)}</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
