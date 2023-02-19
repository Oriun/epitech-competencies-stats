import {
  Card,
  Text,
  Footer,
  Flex,
  Button,
  Metric,
  CategoryBar,
  ColGrid,
  Badge,
  Title,
} from "@tremor/react";
import React from "react";
import GandalfContext from "../context/gandalf.context";
// import {
//   getSingleCompetency,
// } from "../services/gandalf.service";
import { useNavigate } from "react-router-dom";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const data = React.useContext(GandalfContext);
  return (
    <>
      <Card maxWidth="max-w-xl" shadow>
        <Flex justifyContent="justify-start">
          <ArrowNarrowLeftIcon onClick={() => navigate("/")} />
          &nbsp;&nbsp;
          <Title truncate>Dexter - Compétence</Title>
        </Flex>
      </Card>
      <Card maxWidth="max-w-xl" shadow marginTop="mt-4">
        <Text>Work in progress</Text>
      </Card>
    </>
  );
};

export default Home;
