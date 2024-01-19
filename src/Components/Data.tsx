const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&hourly=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=Africa%2FCairo&forecast_days=1"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;

export const revalidate = 30;
