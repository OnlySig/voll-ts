import { useEffect, useState } from "react";

export default function useFetch<T>({ url }: { url: string }) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (url) {
      async function fetchData() {
        try {
          const resp = await fetch(`http://localhost:8080/${url}`);
          const dados = await resp.json();
          setData(dados);
        } catch (error) {
          if (error instanceof Error) setError(error.message);
          else setError("Erro demoniaco");
        }
      }
      fetchData();
    }
  }, [url]);

  return {
    data,
    error,
  };
}
