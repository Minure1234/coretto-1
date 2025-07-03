
import logo1 from '../../assets/images/clients-img-1.png';
import logo2 from '../../assets/images/clients-img-2-hover.png';
import logo3 from '../../assets/images/clients-img-3-hover.png';
import logo4 from '../../assets/images/clients-img-4-hover.png';
import logo5 from '../../assets/images/clients-img-5-hover.png';
import logo6 from '../../assets/images/clients-img-6-hover.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const LogoGallery = () => {
  return (
    <div className="logo-gallery">
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;
