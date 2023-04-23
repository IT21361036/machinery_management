import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  
  /*const {data, loadig, error} = useFetch("/machines/countByType");

  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="./images/img4.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Soft Biscuit Manufacturing Production Line</span>
        <span className="fpCity">Purchased From : Madrid</span>
        <span className="fpPrice">Initial Cost : $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="./images/img5.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hard Biscuit Manufacturing Production Line</span>
        <span className="fpCity">Purchased From : Austin</span>
        <span className="fpPrice">Initial Cost : $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="./images/img6.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Soft And Hard Biscuit Production Line</span>
        <span className="fpCity">Purchased From : Lisbon</span>
        <span className="fpPrice">Initial Cost : $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="./images/img7.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sandwich Biscuit Production Line</span>
        <span className="fpCity">Purchased From : Berlin</span>
        <span className="fpPrice">Initial Cost : $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};*/

const {data, loadig, error} = useFetch("/machines?featured=true&limit=4");

  return (
    <div className="fp">
      {loadig ? (
        "loadig" 
      ):(
      <>
      
      {data.map(item=>(

     
        <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Initial Cost ${item.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>
        }
      </div>
       ))}
      </>
      )}
    </div>
  );
};

export default FeaturedProperties;
