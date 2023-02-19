import { Card, Text } from "@tremor/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import GandalfContext from "../context/gandalf.context";

const ErrorPage: React.FC = () => {
  console.log("rendering error page");
  const data = React.useContext(GandalfContext);
  const navigate = useNavigate();
  if (data.length) {
    navigate("/");
    return null;
  }
  return (
    <>
      <Header title="No data" />
      <Card maxWidth="max-w-xl" shadow marginTop="mt-4">
        <Text>
          Lancez l'extension sur votre page de compétences gandalf pour
          récupérer, stocker et actualiser vos données.
        </Text>
      </Card>
    </>
  );
};

export default ErrorPage;
