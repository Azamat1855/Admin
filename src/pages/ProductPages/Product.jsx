import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3005/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow">
            <img src={product.image} alt={product.title} className="w-full h-auto max-h-52 object-cover mb-2 rounded-t-lg"/>
            <div className='p-4'>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            <p className="italic text-gray-600">{product.foodType}</p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Product;
