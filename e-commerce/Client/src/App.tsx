
function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

function Header() {
  return (
    <h1>Header</h1>
  );
}

function ProductList() {
  return (
    <div>
      <h2>ProductList</h2>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

function Product() {
  return(
    <h3>Product</h3>
  );
}

export default App
