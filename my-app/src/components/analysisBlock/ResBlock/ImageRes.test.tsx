import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ImageRes from './ImageRes';
import ImageA from '../related/ImageA'
import axios from 'axios';
import userEvent from '@testing-library/user-event';
jest.mock('axios');

it("Checking ImageRes component",()=>{
      render(<MemoryRouter><ImageRes/></MemoryRouter>)
      const testId = screen.getByTestId('imageres');
      expect(testId).toBeInTheDocument();
      expect(screen.getByText(/Image Survey Responses !!/i)).toBeInTheDocument();
})

describe('ImageRes testing', () => {

   it('Image title and responsed by',async()=>{
      const mockData = {
          data: [{
            _id: "65c0c9b69cc9d5a8500ab2ab",
            name: "Adarsh",
            title: "IMag3 natuer ",
            answer: [
                {
                    "img1": "http://res.cloudinary.com/daguvaxyh/image/upload/v1706851289/Images/robmt9oktftaxq50rtrm.webp",
                    "img2": "http://res.cloudinary.com/daguvaxyh/image/upload/v1706851290/Images/twpgtmabajv7ztdheezi.png",
                    "_id": "65c0c9b69cc9d5a8500ab2ac"
                }
            ],
        }]
       };
   
      axios.get = jest.fn().mockResolvedValue({data: mockData})

          const imageId = 'IMag3 natuer ';
          render(<MemoryRouter initialEntries={[`/image/${imageId}`]}>
              <Routes>
                  <Route path='/image/:imageId' element={<ImageRes/>}/>
              </Routes>
          </MemoryRouter>)
  
          await waitFor(()=>{
               const title = screen.getAllByTestId('imageRes-tag');
               expect(title[0]).toBeInTheDocument();
          })
   })

   it('imageRes onClick testing',async()=>{
      const user = userEvent.setup();
      const mockData = {
            data: [{
              _id: "65c0c9b69cc9d5a8500ab2ab",
              name: "Adarsh",
              title: "IMag3 natuer ",
              answer: [
                  {
                      "img1": "http://res.cloudinary.com/daguvaxyh/image/upload/v1706851289/Images/robmt9oktftaxq50rtrm.webp",
                      "img2": "http://res.cloudinary.com/daguvaxyh/image/upload/v1706851290/Images/twpgtmabajv7ztdheezi.png",
                      "_id": "65c0c9b69cc9d5a8500ab2ac"
                  }
              ],
          }]
         };
     
        axios.get = jest.fn().mockResolvedValue({data: mockData})
        const imageId = 'IMag3 natuer ';
        render(<MemoryRouter initialEntries={[`/image/${imageId}`]}>
            <Routes>
                <Route path='/image/:imageId' element={<ImageRes/>}/>
            </Routes>
        </MemoryRouter>)

        await waitFor(async()=>{
            const title = 'IMag3 natuer ';
            const name = 'Adarsh';
            const btn = screen.getAllByTestId(/imageRes-tag/i);
            await user.click(btn[0]);
            render(<MemoryRouter initialEntries={[`/imageres/${title}/${name}`]}>
                <Routes>
                <Route path='/imageres/:imageId/:name' element={<ImageA/>}/>
                </Routes>
            </MemoryRouter>)

            expect(await screen.findByText(/User response on images!!/i)).toBeInTheDocument()
        })
        
   })

})
  