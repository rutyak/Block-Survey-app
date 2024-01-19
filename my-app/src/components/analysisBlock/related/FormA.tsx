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

  type ansType = {
    que: string,
    ans: string
  }

  type questionType = {
    options: string[],
    question: string,
    type: string
  }

  type formType = {
    desc: string,
    title: string,
    type: string,
    _id: string,
    stage: string,
    questions: questionType[]
    answer: ansType[]
  }
  const [form, setForm] = useState<formType[]>();

  useEffect(() => {
    axios.get(`${BaseUrl}/formAnsData`).then(response => setForm(response.data.data))
  }, [])

  console.log("anaForm", form);

  return (
    <div className='video-img-form-user-res'>
      <Navbar />
      <div className="from-res">
        <div>
          <h1>User response on survey!!</h1>
        </div>
        {
          form?.map((form: formType, i: number) => {
            if (formId === form._id) {
              return (
                form.answer?.map((survey: ansType, j: number) => (
                  <div key={i}>
                    <div className="ques-survey">
                      <div className="que-form">
                        <b>{survey.que? j+1.: ''} {survey.que}</b>
                      </div>
                      <div className="ans-form">
                        <p>{survey.ans+'  '}</p>
                      </div>
                    </div>
                  </div>
                ))
              )
            }
          })
        }

      </div>
    </div>
  )
}

export default Form
