/*import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      
      <img src={item.photos[0]} alt="" className="siImg" />
      
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/machines/${item._id}`}>
          </Link>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;*/

import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {

  return (
    <div className="searchItem">
      {item && item.photos && (
        <img
          src={item.photos[0]}
          alt=""
          className="siImg"
        />
      )}
      <div className="siDesc">
        <h1 className="siTitle">{item && item.name}</h1>
        <span className="siDistance">Model Number :{item && item.distance}</span>
        <span className="siTaxiOp">Hardware and Machinery Mangement</span>
        <span className="siSubtitle">
          Biscuits Manufacturing Management System
          </span>
        
        <span className="siCancelOpSubtitle">
        </span>
      </div>
      <div className="siDetails">
      
        <div className="siDetailTexts">
        <span className="siPrice">${item.cheapestPrice}</span>
        <div>{item && item.name}</div>
         <br />
         {item && item.photos && (
           <div>
             <img
               src={item.photos[0]}
               alt=""
               className="siImgSmall"
             />
           </div>
         )}
         <div></div>
         <br></br>
         <br></br>
    
          <Link to={`/hotels/${item && item._id}`}>
          
          <button className="siCheckButton">See Description</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

