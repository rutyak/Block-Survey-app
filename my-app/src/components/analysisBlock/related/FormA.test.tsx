import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FormA from './FormA';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000'

it('Checking Form component of analysis component',()=>{
    render(<MemoryRouter><FormA/></MemoryRouter>);
    const text = screen.getByText('User response on survey!!');
    expect(text).toBeInTheDocument();
})

it('Testing Form get api',async ()=>{
    
    const mockData = {
        data:{
            data:{
            title: 'Nature',
            name: 'Rutik'
        }
        }
    }
    axios.get = jest.fn().mockResolvedValue(mockData);
    const res = await axios.get(`${BaseUrl}/formAnsData`);
    expect(mockData.data.data.title).toEqual(res.data.data.title);
    expect(mockData.data.data.name).toEqual(res.data.data.name);
})

describe('ImageA component', () => {

    it('Image tag and text testing',async()=>{
  
        const formData = {
            data: [ {
                _id: "65bc8be3204919eb7b8d4155",
                name: "Rutya k",
                title: "Malum hamko tumhe",
                answer: [
                    {
                        que: "Ka ho na pyarr hai",
                        ans: "sgdtg",
                        _id: "65bc8be3204919eb7b8d4156"
                    },
                    {
                        que: "Kaha na ptya hai",
                        ans: "xrdget",
                        _id: "65bc8be3204919eb7b8d4157"
                    },
                    {
                        que: "sddfetgf",
                        ans: [
                            "dgdt"
                        ],
                        _id: "65bc8be3204919eb7b8d4158"
                    },
                    {
                        que: "sdfgt",
                        ans: "xdgdtg",
                        _id: "65bc8be3204919eb7b8d4159"
                    },
                    {
                        que: "sdfregy",
                        ans: "fgdtrg",
                        _id: "65bc8be3204919eb7b8d415a"
                    }
                ],        
            }]
         };
      axios.get = jest.fn().mockResolvedValue({data: formData});
    
      const formId = 'Malum hamko tumhe';
      const name = 'Rutya k';
      render(<MemoryRouter initialEntries={[`/formres/${formId}/${name}`]}>
        <Routes>
         <Route path='/formres/:formId/:name' element={<FormA/>}/>
        </Routes>
      </MemoryRouter>)
  
      await waitFor(()=>{
          const que = screen.getAllByTestId('user-form-res-0');
          expect(que[0]).toBeInTheDocument();
      })
    })
  });