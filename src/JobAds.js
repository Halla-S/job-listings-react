import React from "react";
import "./App.css";
// import Data from "./data.json";
const JobAds = (props) => {
  return (
    <div className="myDiv">
      {props.data.map((element, index) => {
        return (
          <div className="cardDiv">
            <section className="section1">
              <img src={element.logo} alt=" " />
            </section>
            <section className="section2">
              <ul>
                <li key={1}>{element.company}</li>
                <li key={2} className={element.new ? "new" : "none"}>
                  {element.new === true ? "NEW" : ""}
                </li>
                <li key={3} className={element.featured ? "featured" : "none"}>
                  {element.featured === true ? "FEATURED" : ""}
                </li>
              </ul>
              <h2>{element.position}</h2>
              <ul>
                <li key={index}>{element.postedAt}</li>
                <li key={1 + index}>{element.contract}</li>
                <li key={2 + index}>{element.location}</li>
              </ul>
            </section>
            <section className="section3">
              <ul>
                <li key={index}>{element.role}</li>
                <li key={1 + index}>{element.level}</li>
                {element.languages.map((lan) => {
                  return <li>{lan}</li>;
                })}
                {element.tools.map((tool) => {
                  return <li>{tool}</li>;
                })}
              </ul>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default JobAds;
