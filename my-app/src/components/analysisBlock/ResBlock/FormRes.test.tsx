import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FormRes from './FormRes';
import FormA from '../related/FormA';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
// const BaseUrl = 'http://localhost:5000';
// jest.mock('axios');

it("Checking FormRes component", () => {
      render(<MemoryRouter><FormRes /></MemoryRouter>)
      const testId = screen.getByTestId('formres');
      expect(testId).toBeInTheDocument();
      expect(screen.getByText(/Survey Responses !!/i)).toBeInTheDocument();
})

describe('FormRes testing', () => {

      it('Form title and responsed by',async()=>{
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
       
           axios.get = jest.fn().mockResolvedValue({data: formData})
  
          const formId = 'Malum hamko tumhe';
          render(<MemoryRouter initialEntries={[`/form/${formId}`]}>
              <Routes>
                  <Route path='/form/:formId' element={<FormRes/>}/>
              </Routes>
          </MemoryRouter>)
  
          await waitFor(()=>{
               const title = screen.getAllByTestId('formRes-tag');
               expect(title[0]).toBeInTheDocument();
          })
      })
  
      it('formRes onClick testing',async()=>{
          const user = userEvent.setup();
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
         
            axios.get = jest.fn().mockResolvedValue({data: formData})
            const formId = 'Malum hamko tumhe';
            render(<MemoryRouter initialEntries={[`/form/${formId}`]}>
                <Routes>
                    <Route path='/form/:formId' element={<FormRes/>}/>
                </Routes>
            </MemoryRouter>)
    
            await waitFor(async()=>{
                const name = 'Rutya k';
                const btn = screen.getAllByTestId(/formRes-tag/i);
                await user.click(btn[0]);
                render(<MemoryRouter initialEntries={[`/formres/${formId}/${name}`]}>
                    <Routes>
                    <Route path='/formres/:formId/:name' element={<FormA/>}/>
                    </Routes>
                </MemoryRouter>)
    
                expect(await screen.findByText(/User response on survey!!/i)).toBeInTheDocument();
            })
            
       })
  })
  

