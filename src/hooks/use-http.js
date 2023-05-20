import { useCallback, useState } from "react";

const useHttp = (requestOptions, manageData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendHttpRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestOptions.endpoint, {
            method: requestOptions.method ? requestOptions.method : "GET",
            headers: requestOptions.headers ? requestOptions.headers : {},
            body: requestOptions.body ? JSON.stringify({ text: productText }) : null,
          }
        );

        if (!response.ok) {
          throw new Error("Ошибка запроса.");
        }

        const data = await response.json();
        manageData(data);
       
      } catch (err) {
        setError(err.message || "Что-то пошло не так...");
      }
      setIsLoading(false);
    };

    return {  isLoading, error, sendHttpRequest  };
};

export default useHttp;