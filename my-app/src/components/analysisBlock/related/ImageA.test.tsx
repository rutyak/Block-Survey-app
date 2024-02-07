import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ImageA from './ImageA';
import axios from 'axios';
jest.mock('axios');
const BaseUrl = 'http://localhost:5000'


it('Checking Image component of analysis component',()=>{
    render(<MemoryRouter><ImageA/></MemoryRouter>);
    const text = screen.getByText('User response on images!!');
    expect(text).toBeInTheDocument();
})

it('Testing Image get api',async ()=>{
    
    const mockData = {
        data:{data:{
            title: 'Nature',
            name: 'Rutik'
        }}
    }
    axios.get = jest.fn().mockResolvedValue(mockData);
    const res = await axios.get(`${BaseUrl}/imageAnsData`);
    expect(mockData.data.data.title).toEqual(res.data.data.title);
    expect(mockData.data.data.name).toEqual(res.data.data.name);
})

describe('ImageA component', () => {

    it('Image tag and text testing',async()=>{
  
        const imageData = {
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
      axios.get = jest.fn().mockResolvedValue({data: imageData});
    
      const imageId = 'IMag3 natuer ';
      const name = 'Adarsh';
      render(<MemoryRouter initialEntries={[`/imageres/${imageId}/${name}`]}>
        <Routes>
         <Route path='/imageres/:imageId/:name' element={<ImageA/>}/>
        </Routes>
      </MemoryRouter>)
  
      await waitFor(()=>{
          expect(screen.getByTestId('user-image-res')).toBeInTheDocument();
          expect(screen.getByTestId('user-img-res')).toBeInTheDocument();
      })
    })
  });