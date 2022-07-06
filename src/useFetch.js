import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
        setTimeout(() => {    
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
            .catch(err => {
              if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                setIsPending(false);
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
              }
              
          })
        }, 0);
      
        return () => abortCont.abort();
      }, [url]) // dependency array limits when the useEffect hook will render the component
    
  return { data, isPending, error }
}

export default useFetch;