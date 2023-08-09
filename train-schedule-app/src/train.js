// src/api/auth.js
const registerCompany = async () => {
    const response = await fetch('http://20.244.56.144/train/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: 'Train Central',
        ownerName: 'Ram',
        rollNo: '1',
        ownerEmail: 'ram@abc.edu',
        accessCode: 'FKDLjg',
      }),
    });
  
    const data = await response.json();
    return data;
  };
  
  const getAuthToken = async () => {
    // Use the registered credentials to get the auth token
    // Make a POST request to http://20.244.56.144/train/auth
    // Include the necessary headers and body
    // Return the auth token
  };
  
  export { registerCompany, getAuthToken };
  