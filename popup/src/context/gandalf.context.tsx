import React from "react";
import getData from "../services/gandalf.service";
import { GandalfData } from "../types/gandalf.types";
import { useNavigate } from "react-router-dom";

const GandalfContext = React.createContext<GandalfData>([]);

export const GandalfProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState<GandalfData>([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    getData()
      .then((data) => {
        console.log("getData ok");
        setData(data);
      })
      .catch((err) => {
        console.log("getData error", err);
        navigate("/error");
      });
  }, []);
  console.log("data in provider", data);
  return (
    <GandalfContext.Provider value={data}>{children}</GandalfContext.Provider>
  );
};

export default GandalfContext;
