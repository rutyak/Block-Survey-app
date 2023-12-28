import React from "react";
import "./Entry.css";
import plusSurvey from "../../Asset/icons8-plus-64.png";

type entryTypes = {
  handleSurveyToggle: any;
  btnTitle: any;
};

const Entry = ({ handleSurveyToggle, btnTitle}: entryTypes) => {
  return (
    <div className="entry-btn-container">
      <h3>Create your survey !!</h3>
      <button className="entryBtn" onClick={handleSurveyToggle}>
        <img src={plusSurvey} alt="survey icon" />
        <p>{btnTitle}</p>
      </button>
    </div>
  );
};

export default Entry;
