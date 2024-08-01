import React, { useEffect, useState } from "react";
import "./App.scss";

const Landing = React.lazy(() => import("./components/Landing"));

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <Landing />
  ) : (
    <div className="ui active centered inline loader" />
  );
};

export default Home;
