import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Video from "./Video";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
jest.mock('axios');

it('Testing video post api',async()=>{
    
    const mockResponse = {
        data: {
            title: 'Nature',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockResponse);
    const res = await axios.post(`${BaseUrl}/videos/upload`);
    expect(mockResponse.data.name).toEqual(res.data.name);
    expect(mockResponse.data.title).toEqual(res.data.title);
})


it('testing video component rendering',()=>{

    render(<MemoryRouter><Video/></MemoryRouter>);
    const testid = screen.getByTestId('video-container')
    expect(testid).toBeInTheDocument();
})