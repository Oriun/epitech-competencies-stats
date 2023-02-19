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
import { useNavigate } from "react-router-dom";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card maxWidth="max-w-xl" shadow>
        <Flex justifyContent="justify-start">
          <Title truncate>Dexter - No data</Title>
        </Flex>
      </Card>
      <Card maxWidth="max-w-xl" shadow marginTop="mt-4">
        <Text>
          Lancez l'extension sur votre page de compétences gandalf pour
          récupérer, stocker et actualiser vos données.
        </Text>
      </Card>
    </>
  );
};

export default Home;
