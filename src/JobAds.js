import React from "react";
import "./App.css";
// import Data from "./data.json";
const JobAds = (props) => {
  return (
    <div  className="myDiv">
      {props.data.map((element,index) => {
        return (
          <div>
            <section className="sectionOne">
              <img src={element.logo} alt=""></img>
            </section>
            <section className="sectionTwo">
              <h4>{element.company}</h4>
              <h2>{element.position}</h2>
              <ul>
                <li key={index}>{element.postedAt}</li>
                <li key={1+index}>{element.contract}</li>
                <li key={2+index}>{element.location}</li>
              </ul>
            </section>
            <section className="sectionThree">
              <ul>
                <li key={index}>{element.role}</li>
                <li key={1+ index}>{element.level}</li>
                {element.languages.map((lan) => {
                  return <li >{lan}</li>;
                })}
                {element.tools.map((tool) => {
                  return <li >{tool}</li>;
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
