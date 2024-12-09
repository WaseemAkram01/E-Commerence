import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Card() {
  const [dataArray, setDataArray] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setDataArray(response.data);
        setSearchedProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchResults = dataArray.filter((item) =>
      item.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchedProducts(searchResults);
  }, [searchString, dataArray]);

  const sortAscending = () => {
    const sortedProducts = [...searchedProducts].sort((a, b) => a.price - b.price);
    setSearchedProducts(sortedProducts);
  };

  const sortDescending = () => {
    const sortedProducts = [...searchedProducts].sort((a, b) => b.price - a.price);
    setSearchedProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Shop Our Products</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <button
            onClick={sortAscending}
            className="px-4 py-2 text-white bg-gray-800 hover:bg-blue-600 rounded-lg transition duration-200"
          >
            Ascending
          </button>
          <button
            onClick={sortDescending}
            className="px-4 py-2 text-white bg-gray-800 hover:bg-blue-600 rounded-lg transition duration-200"
          >
            Descending
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {searchedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={product.image} alt={product.title} className="h-40 w-auto object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm text-center mb-2">
              {product.description.length > 60
                ? `${product.description.substring(0, 60)}...`
                : product.description}
            </p>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
