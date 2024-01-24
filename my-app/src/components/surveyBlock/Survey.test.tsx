import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Survey from "./Survey";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
jest.mock('axios');


it('testing survey component rendering',()=>{
    render(<MemoryRouter><Survey/></MemoryRouter>);
    const testid = screen.getByTestId('survey-container')
    expect(testid).toBeInTheDocument();
})

// it('Testing video get api',async()=>{
    
//     const mockResponse = {
//         data: {
//             title: 'Nature',
//             name: 'rutik'
//         }
//     }
//     axios.get = jest.fn().mockResolvedValue(mockResponse);
//     const res = await axios.get(`${BaseUrl}/videoData`);
//     expect(mockResponse.data.name).toEqual(res.data.name);
//     expect(mockResponse.data.title).toEqual(res.data.title);
// })

// it('Testing Image get api',async()=>{
    
//     const mockResponse = {
//         data: {
//             title: 'Nature',
//             name: 'rutik'
//         }
//     }
//     axios.get = jest.fn().mockResolvedValue(mockResponse);
//     const res = await axios.get(`${BaseUrl}/imageData`);
//     expect(mockResponse.data.name).toEqual(res.data.name);
//     expect(mockResponse.data.title).toEqual(res.data.title);
// })

// it('Testing form get api',async()=>{
    
//     const mockResponse = {
//         data: {
//             title: 'Nature',
//             name: 'rutik'
//         }
//     }
//     axios.get = jest.fn().mockResolvedValue(mockResponse);
//     const res = await axios.get(`${BaseUrl}/formData`);
//     expect(mockResponse.data.name).toEqual(res.data.name);
//     expect(mockResponse.data.title).toEqual(res.data.title);
// })