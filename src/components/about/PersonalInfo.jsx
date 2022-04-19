import React from "react";

const personalInfoContent = [
  { meta: "name", metaInfo: "Danila Popov" },
  { meta: "instagram", metaInfo: "@Corhydrae" },
  { meta: "github username", metaInfo: "Corhydare" },
  { meta: "Email", metaInfo: "danila.vpopov@gmail.com" },
  { meta: "LinkedIn", metaInfo: "danilapopov" },
  { meta: "langages", metaInfo: "Javascript, React, SQL, HTML, CSS" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
