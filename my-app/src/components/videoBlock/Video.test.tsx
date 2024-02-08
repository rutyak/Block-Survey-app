import React from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Video from "./Video";
const BaseUrl = 'http://localhost:5000';
import axios from 'axios';
import userEvent from "@testing-library/user-event";
jest.mock('axios');

it('Testing video post api and Submit button', async () => {

    const mockResponse = {
        data: {
            title: 'Nature',
            name: 'rutik'
        }
    }
    axios.post = jest.fn().mockResolvedValue(mockResponse);

    render(<MemoryRouter><Video /></MemoryRouter>);

    const res = await axios.post(`${BaseUrl}/videos/upload`);
    expect(mockResponse.data.name).toEqual(res.data.name);
    expect(mockResponse.data.title).toEqual(res.data.title);
})


it('testing video component rendering', () => {
    render(<MemoryRouter><Video /></MemoryRouter>);
    const text = screen.getByText('Video Survey Creation')
    expect(text).toBeInTheDocument();
})

it('Testing inputs', async () => {
    userEvent.setup();
    render(<MemoryRouter><Video /></MemoryRouter>);
    const inputBox1 = screen.getByPlaceholderText('Video title');
    const inputBox2 = screen.getByPlaceholderText('Description');
    await userEvent.type(inputBox1, 'Nature');
    await userEvent.type(inputBox2, 'nature lover');
    expect(inputBox1).toHaveValue('Nature');
    expect(inputBox2).toHaveValue('nature lover');
})

it('Testing submit button', async () => {
    userEvent.setup();
    render(<MemoryRouter><Video /></MemoryRouter>);
    const btn = screen.getByTestId('video-submit');
    await userEvent.click(btn);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
})


// it('testing video-choose button', async () => {
//     const user = userEvent.setup()

//     render(<MemoryRouter><Video /></MemoryRouter>);
//     const file = new File(['hello'], 'hello.mp4', {type: 'video/mp4'})
//     const input = screen.getByLabelText(/Upload video:/i) as any
  
//     await user.upload(input, file)
  
//     expect(input.files[0]).toBe(file)
// })





