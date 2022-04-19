import React from "react";

const achievementsContent = [
  { title: "12", subTitle1: "line 1", subTitle2: "line 2" },
  { title: "97", subTitle1: "line 1", subTitle2: "line 2" },
  { title: "81", subTitle1: "line 1", subTitle2: "line 2" },
  { title: "53", subTitle1: "line 1", subTitle2: "line 2" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
