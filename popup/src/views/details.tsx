import {
  Block,
  Bold,
  Button,
  ButtonInline,
  Callout,
  Card,
  Flex,
  Footer,
  List,
  ListItem,
  Metric,
  ProgressBar,
  Text,
  ColGrid,
  Title,
  Badge,
} from "@tremor/react";
import GandalfContext from "../context/gandalf.context";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ColorForMark,
  getSingleCompetence,
  isFailure,
  isSuccess,
} from "../services/gandalf.service";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";
import Header from "../component/header";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  if (!code) {
    navigate("/");
    return null;
  }
  const data = React.useContext(GandalfContext);
  const competence = React.useMemo(
    () => getSingleCompetence(data, code),
    [data]
  );
  if (!data.length) return null;
  if (data.length && !competence) {
    console.error("Competence not found");
    navigate("/error");
    return null;
  }
  const { succeeded, failed } = competence.expectations;
  const totalExpectations = succeeded.length + failed.length;
  const color = ColorForMark[competence.status];
  const txt = isSuccess(competence)
    ? "acquis"
    : isFailure(competence)
    ? "échoué"
    : "non évaluée";
  return (
    <>
      <Header title="Compétence" backUrl="/competencies" />
      <Card maxWidth="max-w-xl" marginTop="mt-4">
        <Text>Compétence {code}</Text>
        <ColGrid gapY="gap-y-2">
          <Metric>{competence.name}</Metric>
        </ColGrid>
        <Callout
          title={"Compétence " + txt + (txt !== "non évaluée" ? "e" : "")}
          text={
            txt == "non évaluée"
              ? `Cette compétence n'a pas encore été évaluée`
              : `Vous avez ${txt} la compétence avec le status "${competence.status}"`
          }
          color={color}
          marginTop="mt-6"
        />
        <ProgressBar
          percentageValue={(succeeded.length * 100) / (totalExpectations || 1)}
          color={color}
          marginTop="mt-6"
        />
        <Flex marginTop="mt-4">
          <Block>
            <Text>Succès</Text>
            <Text color={succeeded.length ? "emerald" : "slate"}>
              <Bold>{succeeded.length}</Bold>(
              {((succeeded.length * 100) / (totalExpectations || 1)).toFixed(2)}
              %)
            </Text>
          </Block>
          <Block>
            <Text textAlignment="text-right">Echec / Non évalué</Text>
            <Text textAlignment="text-right">
              <Bold>{failed.length}</Bold>(
              {((failed.length * 100) / (totalExpectations || 1)).toFixed(2)}%)
            </Text>
          </Block>
        </Flex>
        <Flex marginTop="mt-6">
          <Flex justifyContent="justify-start">
            <Text>
              <Bold>Projet</Bold>
            </Text>
            &nbsp;&nbsp;
            <Badge text={totalExpectations + ""} color="slate" />
          </Flex>
          <Text>
            <Bold>Résultat</Bold>
          </Text>
        </Flex>
        <List marginTop="mt-1">
          {[...succeeded, ...failed].map((item) => (
            <ListItem key={item.project}>
              <Button variant="light" onClick={() => window.open(item.url)}>
                {item.project}
              </Button>
              <Badge color={ColorForMark[item.mark]} text={item.mark} />
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export default Details;
