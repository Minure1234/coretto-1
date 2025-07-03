// import "./Basket.scss";

// const products = [
//   { id: 1, name: "Coffee Beans", price: 12.99 },
//   { id: 2, name: "Espresso Machine", price: 249.99 },
//   { id: 3, name: "Coffee Mug", price: 5.99 },
//   { id: 4, name: "Milk Frother", price: 29.99 },
// ];

// const Basket = ({ addToCart, searchQuery }) => {
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="basket-page">
//       <h2>Shop Products</h2>

//       {filteredProducts.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="product-card">
//               <h3>{product.name}</h3>
//               <p>${product.price.toFixed(2)}</p>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Basket;



const Basket = () => {
  return (
    <div>Basket</div>
  )
}

export default Basket