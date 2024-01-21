import React from "react";
import {render, screen} from '@testing-library/react';
import Survey from "./components/surveyBlock/Survey";
import '@testing-library/jest-dom/extend-expect';

it("checking fetch apis",()=>{
      render(<Survey/>);

      const text = screen.getByText("Forms");
      expect(text).toBeInTheDocument();
})