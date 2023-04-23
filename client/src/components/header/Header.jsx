import {
  faBed,
  faBook,
  faBookBookmark,
  faBoxesStacked,
  faCalendarDays,
  faCar,
  faCarTunnel,
  faGasPump,
  faHospital,
  faKitMedical,
  faMailBulk,
  faMoneyBill,
  faPerson,
  faPlane,
  faRectangleAd,
  faRectangleXmark,
  faSplotch,
  faSquare,
  faSuitcase,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    Type: 1,
    MainMachine: 0,
    SubMachine: 1,
  });

  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBoxesStacked} />
            <span>Machines</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSuitcase} />
            <span>Sub Machines</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBookBookmark} />
            <span>Categories</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span>Details</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMoneyBill} />
            <span>Total Income</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Hardware and Machinery Management
            </h1>
            <p className="headerDesc">
              The Details about all the machine purchases and Machine Categories to maintain Harware and Machinery Management
            </p>
            { !user && <button className="headerBtn">Sign in / Register</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faRectangleXmark} className="headerIcon" />
                <input
                  type="text"
                  placeholder="What type of Machine ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHospital} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.Type} Type · ${options.MainMachine} MainMachine · ${options.SubMachine} SubMachine`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Type</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Type <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("Type", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Type}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("Type", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Main Machine</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.MainMachine <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("MainMachine", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.MainMachine}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("MainMachine", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Sub Machine</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.SubMachine <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("SubMachine", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.SubMachine}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("SubMachine", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
