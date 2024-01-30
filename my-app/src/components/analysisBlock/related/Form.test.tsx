import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from './FormA';
import axios from 'axios';
const BaseUrl = 'http://localhost:5000'

it('Checking Form component of analysis component',()=>{
    render(<MemoryRouter><Form/></MemoryRouter>);
    const text = screen.getByText('User response on survey!!');
    expect(text).toBeInTheDocument();
})

it('Testing Form get api',async ()=>{
    
    const mockData = {
        data:{
            data:{
            title: 'Nature',
            name: 'Rutik'
        }
        }
    }
    axios.get = jest.fn().mockResolvedValue(mockData);
    const res = await axios.get(`${BaseUrl}/formAnsData`);
    expect(mockData.data.data.title).toEqual(res.data.data.title);
    expect(mockData.data.data.name).toEqual(res.data.data.name);
})