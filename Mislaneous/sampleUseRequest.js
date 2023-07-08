import React, { useState } from 'react';
import useRequest from './useRequest';

function PersonalData() {
  const [url, setUrl] = useState('https://my-api.com/personal-data');
  const [options, setOptions] = useState({ method: 'GET' });
  const { response, error, isLoading, setRequest } = useRequest();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(url, options);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        </label>
        <br />
        <label>
          Method:
          <select value={options.method} onChange={e => setOptions({ ...options, method: e.target.value })}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <div>Error: {error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {response && (
        <div>
          {response.map((data, index) => (
            <
<div key={index}>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
              <p>Gender: {data.gender}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
