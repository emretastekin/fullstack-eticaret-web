import { useState } from "react";


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

  const [products, setProducts] = useState([
    { id:1 ,name:"product1", price:"1000", is_active: true },
    { id:2 ,name:"product2", price:"2000", is_active: false },
    { id:3 ,name:"product3", price:"3000", is_active: true },
  ]);

  function addProduct(){
    setProducts([...products, { id:Date.now() ,name:"product4", price:"4000", is_active: true }])
  }

  return (
    <div>
      <h2>ProductList</h2>

      { products.map(p => (
        <Product key={p.id} product={p} />
      ))}

      <button onClick={addProduct}>Add Product</button>

    </div>
  );
}

function Product(props: any) {
  return(
    <>
    { props.product.is_active ? (
      <div>
        <h3>{props.product.name}</h3>
        <p>{props.product.price}</p>
    </div>
    ) : <p>Ürün satışta değil.</p>}
    </>
  );
}

export default App
