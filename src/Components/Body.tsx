import { useEffect } from "react";
import { dataProps } from "../Interfaces/Interfaces";

const Body = ({ data, loading, error }: dataProps) => {
  console.log(data);
  useEffect;
  return <div className="body">{loading ? "Loading..." : <div></div>}</div>;
};

export default Body;
