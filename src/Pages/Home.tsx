import Body from "../Components/Body";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { Data } from "../Interfaces/Interfaces";

const Home = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&hourly=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=Africa%2FCairo&forecast_days=1"
        );
        const data = await response.json();
        setData(data.hourly);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Body {...{ data, loading, error }} />
      <Footer />
    </div>
  );
};

export default Home;
