
import bgImage from '../../assets/images/background-2.jpg'; // <-- Arxa fon şəkli (sən verəcəksən)
import logoImage from '../../assets/images/cofffe-logo.png';     // <-- "COFFEE" loqolu şəkil (sən verəcəksən)

const ParallaxSection = () => {
  return (
    <section
      className="parallax-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="logo-container">
        <img src={logoImage} alt="Coffee Logo" />
      </div>
    </section>
  );
};

export default ParallaxSection;

