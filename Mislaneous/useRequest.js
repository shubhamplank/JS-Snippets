import React from 'react'

const useRequest = () => {
  const { token } = useAuth();
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState({});
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const setRequest = (newUrl, newOptions) => {
    setUrl(newUrl);
    setOptions(newOptions);
    makeRequest();
  }

  return { response, error, isLoading, setRequest };
}

export default useRequest



