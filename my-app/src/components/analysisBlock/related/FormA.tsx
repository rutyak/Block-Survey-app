import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '../../Navbar/Navbar';
import './VideoA.css'
import './FormA.css';
import { useParams } from "react-router-dom";
const BaseUrl = 'http://localhost:5000';

const Form = () => {

  const param = useParams();
  const formId = param.formId;
  const name = param.name;
  type ansType = {
    que: string,
    ans: string
  }
  type answerType = {
    name: string,
    title: string,
    answer: ansType[]
  }

  type questionType = {
    options: string[],
    question: string,
    type: string
  }

  type formType = {
    name: string,
    desc: string,
    title: string,
    type: string,
    _id: string,
    stage: string,
    questions: questionType[]
    answer: ansType[]
  }
  const [formA, setFormA] = useState<formType[]>();

  useEffect(() => {
    try {
      axios.get(`${BaseUrl}/formAnsData`).then(response => setFormA(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log("anaForm", formA);
  console.log("formId: ", formId);

  return (
    <div className='video-img-form-user-res'>
      <Navbar />
      <div className="form-container">
        <div className="video-img-form-user-res-title">
          <h1>User response on survey!!</h1>
        </div>
        <div className="from-res">
          {
            formA?.map((form: formType, i: number) => (
              formId === form.title && name === form.name? (
                form.answer?.map((survey: any, j: number)=>(
                  <div key={i} >
                    <div className="ques-survey">
                      <div className="que-form">
                        <b>{survey.que ? j + 1. : ''} {survey.que}</b>
                      </div>
                      <div className="ans-form">
                        <p>{survey.ans + '  '}</p>
                      </div>
                    </div>
                  </div>
                )
            )): ''
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Form
