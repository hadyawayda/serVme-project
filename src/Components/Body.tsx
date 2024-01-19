import { useEffect, useState } from "react";
import { dataProps, formattedData } from "../Interfaces/Interfaces";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "time", headerName: "Time", width: 100 },
  {
    field: "temperature",
    headerName: "Temperature (C)",
    width: 150,
    editable: true,
  },
  {
    field: "humidity",
    headerName: "Humidity %",
    width: 200,
    editable: true,
  },
  {
    field: "rain",
    headerName: "Rain",
    width: 150,
    editable: true,
  },
  {
    field: "windSpeed",
    headerName: "Wind Speed (km/h)",
    width: 160,
  },
];

const Body = ({ data, loading, error }: dataProps) => {
  const [Data, setData] = useState<formattedData[]>([]);
  const [name, setName] = useState<string>("");
  const [validation, setValidation] = useState<string>("");
  const [greetingMessage, setGreeting] = useState<string>("");
  const [redux, setRedux] = useState<string>("");

  useEffect(() => formatData(), [data]);

  // This is used to format the data coming from the API from array of column data to arrays of row data
  function formatData() {
    const array = [];

    for (let i = 0; i < 24; i++) {
      const obj = {
        time: data?.time ? data.time[i].slice(11, 16) : i.toString(),
        temperature: data?.temperature_2m ? data.temperature_2m[i] : 0,
        humidity: data?.relative_humidity_2m ? data.relative_humidity_2m[i] : 0,
        rain: data?.rain ? (data.rain[i] === 0 ? "No" : "Yes") : "No",
        windSpeed: data?.wind_speed_10m ? data.wind_speed_10m[i] : 0,
      };
      array.push(obj);
    }
    setData(array);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }

    const regex = /[^a-zA-Z]/;

    if (regex.test(name)) {
      setValidation("Name can only contain Alphabetical Characters");
      return;
    }

    setGreeting(`Welcome ${name}! 😊`);
    setRedux(name);
    setName("");
    setValidation("");
  }

  useEffect(() => console.log(redux), [redux]);

  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <div className="firstname">
          <label htmlFor="first name">First Name: </label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="greeting">{greetingMessage}</div>
        <div className="validation">{validation}</div>
        <button type="submit">Submit</button>
      </form>
      {error ? (
        <div className="error-message">Error: {error.message}</div>
      ) : (
        <>
          {loading ? (
            "Loading..."
          ) : (
            <div>
              <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={Data}
                  columns={columns}
                  getRowId={(row) => row.time}
                  disableRowSelectionOnClick
                  // Uncomment the following commented lines to enable pagination
                  // initialState={{
                  //   pagination: {
                  //     paginationModel: {
                  //       pageSize: 5,
                  //     },
                  //   },
                  // }}
                  // pageSizeOptions={[5]}
                />
              </Box>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Body;
