import React, { useState } from "react";
import add from "../../Asset/addition.png";
import plusSign from "../../Asset/plus.png";
import "./Form.css";
import Entry from "../Entry/Entry";
import Questions from "./Questions/Questions";
import Navbar from "../Navbar/Navbar";

const Form = () => {

  const [btn, setBtn] = useState<any>(
    {
      addBtn: false,
      addSurvey: false,
      removeAddSurvey: true
    }
  )

  const [que, setQue] = useState<any>({
    addQue: [],
    addSingle: [],
    addMulti:[]
  })

  const [heading, setHeading] = useState<any>({
    title: '',
    describe: ''
  })

  let count = que.addQue.length + que.addSingle.length + que.addMulti.length;
  console.log(count);


  function handleAdd(e: any) {
    setBtn({ ...btn, addBtn: true });
  }

  function handleSurveyToggle() {
    setBtn({ ...btn,addSurvey: true, removeAddSurvey: false});
  }

  function handleQue() {
    setQue({
      ...que,
      addQue:[...que.addQue, ""]
    });
    setBtn({ ...btn, addBtn: false });
  }

  function handleMcqQue() {
    setQue({
      ...que,
      addSingle:[...que.addSingle, ""]
    });

    setBtn({ ...btn, addBtn: false });
  }

  function handleCheckQue() {
    setQue({
      ...que,
      addMulti: [...que.addMulti, ""]
    });

    setBtn({ ...btn, addBtn: false });
  }


  console.log(que);
  return (
    <div className="formContainer">
      <Navbar/>
      <div className="form-container">
      {btn.removeAddSurvey && 
      <Entry handleSurveyToggle={handleSurveyToggle} btnTitle={"Create Survey"}/>
      }
      
      {btn.addSurvey && (
        <div className="form-form">
          <h2>Survey Form Creation</h2>
          <div className="form">
            <form>
              <label>
                Title:
                <input
                  type="text"
                  className="input title"
                  value={heading.title}
                  onChange={(e) => setHeading({
                    ...heading,
                    title: e.target.value
                  })}
                  placeholder="Add title"
                />
              </label>
              <br></br>
              <label>
                Description:
                <input
                  type="text"
                  className="input desc"
                  value={heading.describe}
                  onChange={(e) => setHeading({
                    ...heading,
                    describe: e.target.value
                  })}
                  placeholder="Add description"
                />
              </label>
              <p>Add at least 5 questions</p>
            </form>
            {heading.title !== "" && heading.describe !== "" && count!==5 && (
              <div>
                <img
                  className="add-que"
                  onClick={handleAdd}
                  src={add}
                  alt="add icon"
                />
              </div>
            )}
          </div>
          { btn.addBtn && (
            <div className="questions-btn">
              <button onClick={handleQue}>
                <p>Add question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
              <button onClick={handleMcqQue}>
                <p>Add multi choice question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
              <button onClick={handleCheckQue}>
                <p>Add checkbox question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
            </div>
          )}
        </div>
      )}
      
      <Questions que={que} setQue={setQue} heading={heading}/>
      </div>
    </div>
  );
};

export default Form;
