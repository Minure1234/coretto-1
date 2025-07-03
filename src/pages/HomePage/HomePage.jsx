// getPostmanCollection funksiyasını import edin
import { getPostmanCollection } from "../../api/fetchApi";

import img1 from "../../assets/images/hone.jpg";
import img2 from "../../assets/images/htwo.jpg";
import img3 from "../../assets/images/hthree.jpg";
import "./HomePage.scss";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: " COFFEE HEAVEN",
    text: "Wake up to the rich aroma of our premium blends.",
    image: img1,
  },
  {
    id: 2,
    title: "COFFEE MASTERS",
    text: "Hand-picked beans, roasted to perfection.",
    image: img2,
  },
  {
    id: 3,
    title: "COFFEE FACTORY",
    text: "Every cup tells a story.",
    image: img3,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postmanData, setPostmanData] = useState([]);

  // Carousel üçün timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // API məlumatlarını console.log etmək və state-də saxlamaq üçün
  useEffect(() => {
    const fetchAndLogData = async () => {
      try {
        console.log("API məlumatları yüklənir...");
        const data = await getPostmanCollection();

        // Console.log et
        console.log("Postman Collection məlumatları:", data);
        console.log("Məlumatların sayı:", data.length);

        // State-də saxla
        setPostmanData(data);

        // Hər bir elementi ayrıca görmək üçün
        data.forEach((item, index) => {
          console.log(`Element ${index + 1}:`, item);
        });
      } catch (error) {
        console.error("API məlumatlarını yükləyərkən xəta:", error);
      }
    };

    fetchAndLogData();
  }, []); // Komponent yüklənəndə bir dəfə çalışacaq

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="bg-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
            <div className="carousel-caption">
              <div className="caption-content">
                <h2 className={`animate-title`}>{slide.title}</h2>
                <div className={`divider animate-divider`}>
                  <span className="coffee-bean-icon" />
                </div>
                <p className={`animate-text`}>{slide.text}</p>
                <button className={`btn-shop animate-button`}>Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        className="carousel-control-prev"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
