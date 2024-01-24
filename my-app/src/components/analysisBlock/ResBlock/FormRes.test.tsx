import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormRes from './FormRes';

it("Checking FormRes component",()=>{
      render(<MemoryRouter><FormRes/></MemoryRouter>)
      const testId = screen.getByTestId('formres');
      expect(testId).toBeInTheDocument();
})