import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch("/machines/countByType");

  const imagess = [
    "./images/img8.png",
    "./images/img9.png",
    "./images/img10.png",
    "./images/img12.png",
    "./images/img13.png",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading" //loading
      ) : (
        <>
          {data &&
            imagess.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
