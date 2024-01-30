import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Image from './ImageA';
import axios from 'axios';
jest.mock('axios');
const BaseUrl = 'http://localhost:5000'


it('Checking Image component of analysis component',()=>{
    render(<MemoryRouter><Image/></MemoryRouter>);
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