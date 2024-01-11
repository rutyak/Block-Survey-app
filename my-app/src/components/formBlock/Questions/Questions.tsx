import { useDispatch } from "react-redux";
import "./Questions.css";
import { toast } from "react-toastify";
import axios from "axios";


type entryTypes = {
  questions: any;
  heading: any;
  handleQuestions: any
};

const Questions = ({ questions, heading, handleQuestions }: entryTypes) => {
  const dispatch = useDispatch();
    async function handleFormSubmit() {
      try {
        console.log("HandleSubmit Click");

        const postForm = {
          type: 'Survey',
          title: heading.title,
          desc: heading.desc,
          questions: questions,
          stage: ''
        };
        console.log(postForm);
        try {
          const res = await axios.post("http://localhost:5000/forms", postForm);
          if (res.status === 200) {
            console.log(res.data);
            toast.success("Survey uploaded successfully!!");
          }
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
        questions?.map((question: any, index: number) => {

          no++;
          console.log(no);

          return (
            <div>
              { question.type &&
               <div className="numbering"><b>{no}</b><input type="text" placeholder="Enter your question?" onChange={(e) => handleQuestions(e, index)} /></div> 
              }
              {
                question?.options?.map((option: string[], optionIndex: number) => {
                  return (
                    <div className="radio-check">
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
        <button className="submit-btn" onClick={handleFormSubmit}>Submit</button>
      }
    </div>
  );
};

export default Questions;
