import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
  const error = useRouteError();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
