
import bgImage from '../../assets/images/new-img-3.jpg'; // Arxa fon
import coffee1 from '../../assets/images/product-img-1.png';
import coffee2 from '../../assets/images/product-img-5.png';
import coffee3 from '../../assets/images/product-img-8.png';
import coffee4 from '../../assets/images/product-img-3.png';

const products = [
  { name: 'ETHIOPIA COFFEE', price: '$15.00', image: coffee1 },
  { name: 'KENYA COFFEE', price: '$18.00', image: coffee2 },
  { name: 'COLUMBIA COFFEE', price: '$21.00', image: coffee3 },
  { name: 'GUATEMALA COFFEE', price: '$25.00', image: coffee4 },
];

const CoffeeShop = () => {
  return (
    <section className="coffee-shop" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="shop-header">
        <h2>ONLINE COFFEE SHOP</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <button>Add to Cart</button>
              </div>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeShop;
