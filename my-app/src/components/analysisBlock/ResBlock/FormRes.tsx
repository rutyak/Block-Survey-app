import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import axios from 'axios'
import './VideoRes.css'
import { useNavigate, useParams } from 'react-router-dom'
const BaseUrl = 'http://localhost:5000'

const FormRes = () => {

  const param = useParams();
  const formId = param.formId;
  const navigate = useNavigate();
  type formAnsType = {
    name: string,
    title: string,
    answer: [{
      que: string,
      ans: string | string[]
    }]
  }
  const [formA, setFormA] = useState<formAnsType[]>()

  useEffect(() => {
    axios.get(`${BaseUrl}/formAnsData`).then(res => setFormA(res.data.data))
  }, [])

  return (
    <div className='videores-container'>
      <Navbar />
      <div className='videores' data-testid='formres'>
        <div className='videores-title'>
          <h1>Survey Resonses !!</h1>
        </div>
        <div className='videoResBlock'>
          {formA?.map((form: any, i: number) => (
            form.title === formId ? (
              <div className='videoRes' onClick={() => navigate(`/formres/${form.title}/${form.name}`)}>
                <p>{form.title}<br /> Response by: {form.name}</p>
              </div>
            ) : ''
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default FormRes
