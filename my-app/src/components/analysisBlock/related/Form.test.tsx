import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from './FormA';

it('Checking Form component of analysis component',()=>{
    render(<MemoryRouter><Form/></MemoryRouter>);
    const text = screen.getByText('User response on survey!!');
    expect(text).toBeInTheDocument();
})