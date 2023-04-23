import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loadig, error} = useFetch("machines/countByCity?cities=berlin,madrid,london")
 //console.log(data)
  
  return (
    <div className="featured">
      {loadig? ("Loading please wait") : (<><div className="featuredItem">
        <img
          src="./images/img1.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Biscuit Production Line</h1>
          <h2>{data[0]} Submachines</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="./images/img2.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cookie Production Line</h1>
          <h2>{data[1]} Submachines</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="./images/img3.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Biscuits Packaging Line</h1>
          <h2>{data[2]} Submachines</h2>
        </div>
      </div></>
      )}
    </div>
  );
};

export default Featured;
