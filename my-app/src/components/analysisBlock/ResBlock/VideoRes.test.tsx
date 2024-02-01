import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoRes from './VideoRes';
import axios from 'axios';
const BaseUrl= 'http://localhost:5000';
jest.mock('axios')

it("Checking VideoRes component",()=>{
      render(<MemoryRouter><VideoRes/></MemoryRouter>)
      const testId = screen.getByTestId('videores');
      expect(testId).toBeInTheDocument();
})

it('Testing VideoAns get api',async()=>{
    
      const mockResponse = {
          data:{data: {
              title: 'Nature',
              name: 'rutik'
          }}
      }
      axios.get = jest.fn().mockResolvedValue(mockResponse);

      const res = await axios.get(`${BaseUrl}/videoAnsData`);
      expect(mockResponse.data.data.name).toEqual(res.data.data.name);
      expect(mockResponse.data.data.title).toEqual(res.data.data.title);
})

//   it('Testing videoBlock availability',async()=>{
    
//       const mockResponse = {
//           data:{data: {
//               title: 'Nature',
//               name: 'rutik'
//           }}
//       }
//       axios.get = jest.fn().mockResolvedValue(mockResponse);

//       const res = await axios.get(`${BaseUrl}/videoAnsData`);

//       if(res.data.data.length > 0){
//             const text = screen.getByText('Response by:');
//             expect(text).toBeInTheDocument();
//       }
//       expect(mockResponse.data.data.name).toEqual(res.data.data.name);
//       expect(mockResponse.data.data.title).toEqual(res.data.data.title);
//   })