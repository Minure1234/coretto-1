
import coffeeIcon from '../../assets/images/coffeeimageone.png';
import beansIcon from '../../assets/images/coffeeimagetwo.png';
import croissantIcon from '../../assets/images/coffeeimagethree.png';
import togoIcon from '../../assets/images/coffeeimagefour.png';

const DeliciousOffer = () => {
  const offers = [
    {
      icon: coffeeIcon,
      title: 'Types of Coffee',
      description: 'Lorem ipsum dolor sit ametal, consectetur adipiscing elitus. Aeneantos commodo',
    },
    {
      icon: beansIcon,
      title: 'Bean Varieties',
      description: 'Lorem ipsum dolor sit ametal, consectetur adipiscing elitus. Aeneantos commodo',
    },
    {
      icon: croissantIcon,
      title: 'Coffee & Pastry',
      description: 'Lorem ipsum dolor sit ametal, consectetur adipiscing elitus. Aeneantos commodo',
    },
    {
      icon: togoIcon,
      title: 'Coffee to Go',
      description: 'Lorem ipsum dolor sit ametal, consectetur adipiscing elitus. Aeneantos commodo',
    },
  ];

  return (
    <section className="delicious-offer">
      <h2 className="delicious-offer__title">Our Delicious Offer</h2>
      <p className="delicious-offer__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>

      <div className="delicious-offer__items">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.icon} alt={offer.title} className="offer-card__icon" />
            <h3 className="offer-card__title">{offer.title}</h3>
            <p className="offer-card__desc">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliciousOffer;

