import "./App.css";

function Header({ numberOfProducts }) {
  return (
    <header> This is my header number of products {numberOfProducts}</header>
  );
}

function Product({ product }) {
  return (
    <div key={product.id}>
      {product.name}
      {product.price}
    </div>
  );
}

function Store() {
  const products = [
    {
      id: 1,
      name: "Mani",
      price: "$1US"
    }
  ];
  return (
    <main>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </main>
  );
}

export default function App() {
  const numberOfProducts = 0;
  return (
    <div className="App">
      <Header numberOfProducts={numberOfProducts}></Header>
      <h1>Welcome products number: {numberOfProducts}</h1>
      <Store />
    </div>
  );
}
