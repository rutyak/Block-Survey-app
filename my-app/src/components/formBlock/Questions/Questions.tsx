import "./Questions.css";
import { toast } from "react-toastify";
import axios from "axios";
const BaseUrl = 'http://localhost:5000';

type headingType={
  title: string,
  desc: string
}

type handleQuestionsType = (
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
  handleQuestions: handleQuestionsType
};

const Questions = ({ questions, heading, handleQuestions }: entryTypes) => {
    async function handleFormSubmit() {
      try {
       
        const postForm = {
          type: 'Survey',
          title: heading.title,
          desc: heading.desc,
          questions: questions,
          stage: '',
          answer: []
        };
     
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
    <div className="questions" data-testid='questions'>
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
                      <input className="radio-check-width" type="radio"/>
                      ):(
                      <input className="radio-check-width" type="checkbox"/>
                      )}
                      <input  type="text" placeholder="Options" onChange={(e) => handleQuestions(e, index, optionIndex)}/>
                    </div>
                  )
                })
              }
            </div>

          )
        })
      }

        <div className="form-submit-btn">
          <button className="submit-btn" onClick={handleFormSubmit}>Submit</button>
        </div>
    
    </div>
  );
};
 
export default Questions;


