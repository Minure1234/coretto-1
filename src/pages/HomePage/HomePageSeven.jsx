import espresso from "../../assets/images/port-1-img-1.jpg"
import cappuccino from "../../assets/images/port-1-img-2.jpg"
import latte from "../../assets/images/port-1-img-3.jpg"
import americano from "../../assets/images/port-1-img-4.jpg"
import macchiato from "../../assets/images/port-1-img-5.jpg"
import mocha from "../../assets/images/port-1-img-6.jpg"
import frappe from "../../assets/images/port-1-img-7.jpg"
import cortado from "../../assets/images/port-1-img-8.jpg"



const coffeeGalleryImages = [
  { src: espresso, label: "PERFECT CUP" },
  { src: cappuccino, label: "BREWED" },
  { src: latte, label: "COFFEE DRIPS" },
  { src: americano, label: "BAKED BEANS" },
  { src: macchiato, label: "BEST AROMAS" },
  { src: mocha, label: "CREAMS" },
  { src: frappe, label: "ENJOYMENT" },
  { src: cortado, label: "BIG MUGS" },
]

const CoffeeGallery = () => {
  return (
    <div className="coffee-gallery"> {/* Əsas div */}
      <div className="coffee-gallery__header"> {/* Başlıq hissəsi */}
        <h1>OUR SWEET GALLERY</h1>
        {/* Boş div götürüldü, ehtiyac olsa bura xətt və ya digər element əlavə edə bilərsiz */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <div className="coffee-gallery__grid"> {/* Şəkillər gridi */}
        {coffeeGalleryImages.map(({ src, label }, index) => (
          <div key={index} className="coffee-gallery__item"> {/* Hər bir şəkil elementi */}
            <div className="coffee-gallery__item-image-container"> {/* Şəklin konteyneri */}
              <img src={src} alt={label} />
              <div className="coffee-gallery__item-overlay"> {/* Hover effekti overlay-i */}
                <span>{label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeGallery;