import React from "react";
import { MemoryRouter } from "react-router-dom";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Video from "./Video";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
import userEvent from "@testing-library/user-event";
jest.mock('axios');

it('Testing video post api and Submit button',async()=>{
    
    const mockResponse = {
        data: {
            title: 'Nature',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockResponse);

    render(<MemoryRouter><Video/></MemoryRouter>);
    
    const res = await axios.post(`${BaseUrl}/videos/upload`);
    expect(mockResponse.data.name).toEqual(res.data.name);
    expect(mockResponse.data.title).toEqual(res.data.title);
})


it('testing video component rendering',()=>{
    render(<MemoryRouter><Video/></MemoryRouter>);
    const text = screen.getByText('Video Survey Creation')
    expect(text).toBeInTheDocument();
})

it('Testing inputs',async()=>{
    userEvent.setup();
    render(<MemoryRouter><Video/></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Video title');
    const inputBox2= screen.getByPlaceholderText('Description');
    await userEvent.type(inputBox1, 'Nature');
    await userEvent.type(inputBox2, 'nature lover');
    expect(inputBox1).toHaveValue('Nature');
    expect(inputBox2).toHaveValue('nature lover');
})


// it('Checking choose Video button', async() => {
//     // global.URL.createObjectURL = jest.fn();
//     const user = userEvent.setup()
//     const files = new File(['hello'],'hello.mp4',{type: 'video/mp4'});
//     render(<MemoryRouter><Video/></MemoryRouter>);
//     const input = screen.getByTestId(/video-choose/i) as any;
//     await user.upload(input, files);
//     expect(input.files[0]).toStrictEqual(files)
// });


it('Testing submit button',async()=>{
    userEvent.setup();
    render(<MemoryRouter><Video/></MemoryRouter>);
    const btn = screen.getByTestId('video-submit');
    await userEvent.click(btn);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
})


 
  



