import React, { useState } from 'react';

function NumberManagementApp() {
  const [urls, setUrls] = useState([]);
  const [mergedNumbers, setMergedNumbers] = useState([]);

  const handleAddUrl = () => {
    setUrls([...urls, '']);
  };

  const handleUrlChange = (index, newUrl) => {
    const updatedUrls = [...urls];
    updatedUrls[index] = newUrl;
    setUrls(updatedUrls);
  };

  const handleFetchNumbers = async () => {
    try {
      const response = await fetch('http://localhost:8002/numbers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urls }),
      });

      if (response.ok) {
        const data = await response.json();
        setMergedNumbers(data.numbers);
      } else {
        console.error('Failed to fetch numbers');
        setMergedNumbers([]);
      }
    } catch (error) {
      console.error(error);
      setMergedNumbers([]);
    }
  };

  return (
    <div>
      <h1>Number Management App</h1>
      <button onClick={handleAddUrl}>Add URL</button>
      {urls.map((url, index) => (
        <div key={index}>
          <input
            type="text"
            value={url}
            onChange={(e) => handleUrlChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Merged Numbers:</h2>
        <ul>
          {mergedNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NumberManagementApp;
