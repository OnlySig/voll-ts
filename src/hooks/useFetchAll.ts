import { useEffect, useState } from "react";

export default function useFetchAll<T>({ urls }: {urls: string[]}) {
  const [data, setData] = useState<T[] | null>([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    async function fetchAll() {
      try {
        const responses = await Promise.all(urls.map(async (url) => {
          const dados = await fetch(`http://localhost:8080/${url}`);
          return dados.json();
        }));        
        setData(responses);
      } catch (error) {
        if(error instanceof Error) setError(error.message);
      }    
    }
    fetchAll();
  }, [urls]);

  return {
    data,
    error
  };
}