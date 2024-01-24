import "./Questions.css";
import { toast } from "react-toastify";
import axios from "axios";
const BaseUrl = 'http://localhost:5000';

type headingType={
  title: string,
  desc: string
}

type handleQuestions = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  optionIndex?: number
) => void;

type typeObj ={
  type: string,
  question: string,
  options: string[] | string[][]
}

type entryTypes = {
  questions: typeObj[];
  heading: headingType;
  handleQuestions: handleQuestions
};

const Questions = ({ questions, heading, handleQuestions }: entryTypes) => {
    async function handleFormSubmit() {
      try {
        console.log("HandleSubmit Click");

        const postForm = {
          type: 'Survey',
          title: heading.title,
          desc: heading.desc,
          questions: questions,
          stage: '',
          answer: []
        };
        console.log(postForm);
        try {
          const res = await axios.post(`${BaseUrl}/forms`, postForm);
          if (res.status === 200) 
            toast.success("Survey uploaded successfully!!");
 
        } catch (error) {
          console.log(error);
          toast.error("Uploding fail");
        }


      } catch (error) {
        console.log(error);
      }
    }
  let no = -1;
  
  return (
    <div className="questions">
      {
        questions?.map((question: typeObj, index: number) => {

          no++;

          return (
            <div key={index}>
              { question.type &&
               <div className="numbering"><b>{no}</b><input type="text" placeholder="Enter your question?" onChange={(e) => handleQuestions(e, index)} /></div> 
              }
              {
                question?.options?.map((option: string |string[], optionIndex: number) => {
                  return (
                    <div className="radio-check" key={optionIndex}>
                     {question.type === 'radio'? (
                      <input className="radio-check-width" type="radio" placeholder="Option 1"/>
                      ):(
                      <input className="radio-check-width" type="checkbox" placeholder="Option 2"/>
                      )}
                      <input  type="text" placeholder="Enter your question?" onChange={(e) => handleQuestions(e, index, optionIndex)}/>
                    </div>
                  )
                })
              }
            </div>

          )
        })
      }

      {
        questions.length === 6 && 
        <div className="form-submit-btn">
          <button className="submit-btn" onClick={handleFormSubmit}>Submit</button>
        </div>
      }
    </div>
  );
};

export default Questions;
