import React, { useState } from "react";
import add from "../../Asset/addition.png";
import plusSign from "../../Asset/plus.png";
import "./Form.css";
import Entry from "../Entry/Entry";
import Questions from "./Questions/Questions";
import Navbar from "../Navbar/Navbar";

const Form = () => {

  type btnType={
    addBtn: boolean,
    addSurvey: boolean,
    removeAddSurvey: boolean
  }
  const [btn, setBtn] = useState<btnType>(
    {
      addBtn: false,
      addSurvey: false,
      removeAddSurvey: true
    }
  )

  type typeObj ={
    type: string,
    question: string,
    options: string[] | string[][]
  }
  const [questions, setQuestions] = useState<typeObj[]>([{ type:'', question: '', options: []}]);

  type headingType={
    title: string,
    desc: string
  }
  const [heading, setHeading] = useState<headingType>({
    title: '',
    desc: ''
  })

  function handleAdd(e: any) {
    setBtn({ ...btn, addBtn: true });
  }

  function handleSurveyToggle() {
    setBtn({ ...btn,addSurvey: true, removeAddSurvey: false});
  }


  function handleQuestions(e: React.ChangeEvent<HTMLInputElement>, index: any, optionIndex: any){
    
    const que = [...questions]; // que is object
    const object = que[index]; // creating index in array
    if(optionIndex >= 0){
      object.options[optionIndex] = e.target.value;
    }
    else{
      object.question = e.target.value;
    }
  }
  console.clear()

  const addQuestion = (type : string)=>{
    const options = (type !== 'single') ? ['',''] : []
    setQuestions([
      ...questions,
      { type : type, question:'', options: options}
    ])
    setBtn({ ...btn, addBtn: false });
  }

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
                  value={heading.desc}
                  onChange={(e) => setHeading({
                    ...heading,
                    desc: e.target.value
                  })}
                  placeholder="Add description"
                />
              </label>
              <p>Add at least 5 questions</p>
            </form>
            {heading.title !== "" && heading.desc !== "" && (
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
              <button onClick={()=> addQuestion('single')}>
                <p>Add question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
              <button onClick={()=> addQuestion('radio')}>
                <p>Add multi choice question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
              <button onClick={()=> addQuestion('checkbox')}>
                <p>Add checkbox question</p>
                <img src={plusSign} alt="addQue icon" />
              </button>
            </div>
          )}
        </div>
      )}
      
      <Questions questions={questions} heading={heading} handleQuestions={handleQuestions}/>
      </div>
    </div>
  );
}

export default Form;
