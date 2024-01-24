import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormRes from './FormRes';
// import axios from 'axios';
// const BaseUrl = 'http://localhost:5000';
// jest.mock('axios');

it("Checking FormRes component",()=>{
      render(<MemoryRouter><FormRes/></MemoryRouter>)
      const testId = screen.getByTestId('formres');
      expect(testId).toBeInTheDocument();
})

// it('Testing formAnsData get api',async()=>{
    
//     const mockResponse = {
//         data: {
//             title: 'Nature',
//             name: 'rutik'
//         }
//     }
//     axios.get = jest.fn().mockResolvedValue(mockResponse);
//     const res = await axios.get(`${BaseUrl}/formAnsData`);
//     expect(mockResponse.data.name).toEqual(res.data.name);
//     expect(mockResponse.data.title).toEqual(res.data.title);
// })