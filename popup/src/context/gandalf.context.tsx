// Basic react context in typescript
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
        setData(data);
      })
      .catch(() => {
        console.log("error");
        navigate("/error");
      });
  }, []);
  return (
    <GandalfContext.Provider value={data}>{children}</GandalfContext.Provider>
  );
};

export default GandalfContext;
