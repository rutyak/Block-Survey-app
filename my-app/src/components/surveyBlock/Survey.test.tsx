import axios from "axios";

const BaseUrl = 'http://localhost:5000';

describe('Checking data get APIs', () => {

  it('Checking video API', async () => {
    const res = await axios.get(`${BaseUrl}/videoData`);
    expect(res.status).toBe(200);
  });

  it('Checking image API', async () => {
    const res = await axios.get(`${BaseUrl}/imageData`);
    expect(res.status).toBe(200);
  });

  it('Checking form API', async () => {
    const res = await axios.get(`${BaseUrl}/formData`);
    expect(res.status).toBe(200);
});

});
