import React from "react";
import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen} from '@testing-library/react';
import Survey from "./Survey";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
jest.mock('axios');


it('testing survey component rendering',()=>{
    render(<MemoryRouter><Survey/></MemoryRouter>);
    const testid = screen.getByTestId('survey-container')
    expect(testid).toBeInTheDocument();
})



it('Testing Image get api',async()=>{
    
    const mockResponse = {
        data:{data: {
            title: 'Nature',
            name: 'rutik'
        }}
    }
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    const res = await axios.get(`${BaseUrl}/imageData`);
    expect(mockResponse.data.data.name).toEqual(res.data.data.name);
    expect(mockResponse.data.data.title).toEqual(res.data.data.title);
})

