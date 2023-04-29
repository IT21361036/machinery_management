import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loadig"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>China{data.address}</span>
            </div>
            <span className="hotelDistance">
              Model Number – 14 {data.distance}
            </span>
            <span className="hotelPriceHighlight">
              This machine cost - $30040{data.cheapestPrice}
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                  Material: flour,egg, water, etc
                  <br></br>
                  <br></br>Capacity: Minimum 100kg/h,can be customized
                  <br></br>
                  <br></br>Description:
                  <br></br>
                  The hard & soft biscuit production line is developed by our
                  company through digestion and absorption of advanced
                  technology, which can make different shapes of biscuits.
                  <br></br>
                  <br></br>Introduction of Automatic biscuit production line:
                  <br></br>
                  <br></br>
                  1. When mixing low gluten wheat flour, water, sugar, milk,
                  cream, oil, egg, the proportion of oil and sugar is
                  Oil:Sugar=1:2; and Oil+Sugar: Flour = 1:2. The temperature of
                  the finished batter is 26-28℃. The mixing time is 10-15
                  minutes.
                  <br></br>
                  <br></br>
                  2. The rotary moulding machine is continuous roll forming,
                  stable operation, no impact, small vibration and noise, and no
                  residual material. The whole machine is simple, compact and
                  easy to operate.
                  <br></br>
                  <br></br>
                  3. The drive system of the tunnel baking oven transports the
                  oven products and makes them have a suitable residence time in
                  the oven to ensure the baking quality of the products. The
                  transmission system includes the furnace belt, the
                  transmission, the deviation adjustment mechanism, etc.
                  {data.desc}
                </p>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
