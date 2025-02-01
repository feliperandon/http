import "./App.css";
import { FormEvent, useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { ProductProp } from "./types/ProductProp";

const url = "http://localhost:3000/products";

// 4 - custom hook

const App = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);

  // 4 - custom hook
  const { data: items, updateData } = useFetch<ProductProp[]>(url);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);

  // 1 - fetching data
  // useEffect(() => {
  //   const fetchData = async (): Promise<void> => {
  //     const res: Response = await fetch(url);
  //     const data: ProductProp[] = await res.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (items) {
      setProducts(items);
    }
  }, [items]);

  // 2 - adding product
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const product: Omit<ProductProp, "id"> = {
      name,
      price: price || 0,
    };

    const res: Response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - dynamic loading
    const addedProduct: ProductProp = await res.json();

    if (items) {
      updateData([...items, addedProduct]);
    }

    setName("");
    setPrice(undefined);
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price !== undefined ? price : ""}
              name="price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
};

export default App;
