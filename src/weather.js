import React, { useEffect, useState } from "react";
import { promise } from "./components/promise";
import { WeatherLoots } from "./components/weatherloots";

export const Weather = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const [value, setValue] = useState([]);
  const eather = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      return setTimeout(() => {
        promise(coords.latitude, coords.longitude)
          .then(setValue)
          .then(
            setState({
              data: [],
              loading: false,
            })
          )
          .catch(console.error);
      }, 500);
    });
  };

  useEffect(() => {
    eather();
  }, []);

  return (
    <>
      {state.loading && <div className="spinner"></div>}
      {value.map((element) => {
        return <WeatherLoots key={element.id} {...element} />;
      })}
    </>
  );
};