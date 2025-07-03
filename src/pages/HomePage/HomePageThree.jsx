
import espressoImg from "../../assets/images/espres.jpg";
import frenchPressImg from "../../assets/images/frenchpress.jpg";
import turkishImg from "../../assets/images/turkish.jpg";
import coffeeIcon from "../../assets/images/coffee-icon.png";

const cardData = [
  {
    image: espressoImg,
    title: "Prep Techniques",
    text: "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus.",
  },
  {
    image: frenchPressImg,
    title: "French Press",
    text: "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus.",
  },
  {
    image: turkishImg,
    title: "Turkish Ibrik",
    text: "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus.",
  },
];

const CoffeeCards = () => {
  return (
    <section className="coffee-section">
      <div className="header">
        <h1>THE COFFEE HERALD</h1>
        <div className="icon-wrapper">
          <span className="line" />
          <img src={coffeeIcon} alt="coffee icon" className="coffee-icon" />
          <span className="line" />
        </div>
      </div>

      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>

      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};


export default CoffeeCards;
