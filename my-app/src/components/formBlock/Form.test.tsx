import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Form from "./Form";
import axios from "axios";
const BaseUrl = 'http://loaclhost:5000';
jest.mock('axios');

it('testing Form component rendering',()=>{
    render(<MemoryRouter><Form/></MemoryRouter>);
    const testid = screen.getByTestId('form-container')
    expect(testid).toBeInTheDocument();
})

it('Teesting Form fetching api', async ()=>{

    const mockData ={
        data:{
            title: 'NatureLover',
            name: 'rutik'
        }
    }

    axios.post = jest.fn().mockResolvedValue(mockData);
    const res = await axios.post(`${BaseUrl}/forms`);
    expect(mockData.data.name).toEqual(res.data.name);
    expect(mockData.data.title).toEqual(res.data.title);
})