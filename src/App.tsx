import "./App.css";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/products";

type ProductProp = {
  id: number;
  name: string;
  price: number;
};

const App = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);

  // 1 - fetching data
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
