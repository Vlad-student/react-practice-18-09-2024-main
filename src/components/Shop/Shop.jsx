import { useState } from 'react';
import ProductsTable from './ProductsTable/ProductsTable';
import data from './data';
import Cart from './Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cartProducts, setCartProducts] = useState([]);
    return (
      <>
        <ProductsTable products={products}/>
        <Cart cartProducts={cartProducts}/>
      </>
    );
  };

export default Shop;
