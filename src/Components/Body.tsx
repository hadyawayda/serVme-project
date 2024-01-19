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

  useEffect(() => formatData(), [data]);

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

  return (
    <div className="body">
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
                  // initialState={{
                  //   pagination: {
                  //     paginationModel: {
                  //       pageSize: 5,
                  //     },
                  //   },
                  // }}
                  // pageSizeOptions={[5]}
                  // checkboxSelection
                  // disableRowSelectionOnClick
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
