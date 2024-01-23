import React from "react";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Video from "./Video";

const axios = require('axios');
jest.mock('axios');


it('testing video component rendering',()=>{

//     axios.post.mockResolvedValue(inp => {
//         const url = inp.requestUrl;
//   console.log("Mocked");
//         console.log(inp);
//     return      {
//         data: [
//           {
//             userId: 1,
//             id: 1,
//             title: 'My First Album'
//           },
//           {
//             userId: 1,
//             id: 2,
//             title: 'Album: The Sequel'
//           }
//         ]
//       }
// });

    render(<MemoryRouter><Video/></MemoryRouter>);
    const testid = screen.getByTestId('video-container')
    expect(testid).toBeInTheDocument();
})