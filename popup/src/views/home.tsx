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
import ArrowNarrowRightIcon from "../assets/arrow-narrow-right-icon";
import GandalfContext from "../context/gandalf.context";
import {
  getCompetenciesStatusCounts,
  getProjectSet,
  getSubcategories,
  getSubcategoriesWithoutFailures,
} from "../services/gandalf.service";
import Github from "../assets/github";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const data = React.useContext(GandalfContext);
  console.log("home", data);
  const progression = React.useMemo(
    () => getCompetenciesStatusCounts(data),
    [data]
  );
  const projectCount = React.useMemo(() => getProjectSet(data).size, [data]);
  const subCategories = React.useMemo(
    () => getSubcategories(data).length,
    [data]
  );
  const withoutFailure = React.useMemo(
    () => getSubcategoriesWithoutFailures(data).length,
    [data]
  );
  console.log(withoutFailure);
  const successRate = (progression.success * 100) / progression.total;
  return (
    <>
      <Header title="Competencies Viewer" />
      <Card maxWidth="max-w-xl" shadow marginTop="mt-4">
        <Card shadow={false}>
          <Flex>
            <Text truncate={true}>Compétences acquises</Text>
            <Badge
              text={`${successRate.toFixed(2)}%`}
              color={
                successRate > 60
                  ? "green"
                  : successRate > 45
                  ? "yellow"
                  : successRate > 30
                  ? "orange"
                  : "red"
              }
            />
          </Flex>
          <Flex
            justifyContent="justify-start"
            alignItems="items-baseline"
            spaceX="space-x-1"
          >
            <Metric>{progression.success}</Metric>
            <Text>/{progression.total}</Text>
          </Flex>
          <CategoryBar
            categoryPercentageValues={[30, 15, 15, 40]}
            colors={["red", "orange", "yellow", "emerald"]}
            percentageValue={successRate}
            tooltip={`${successRate.toFixed(2)}%`}
            marginTop="mt-2"
          />
          <Button
            variant="light"
            size="sm"
            icon={ArrowNarrowRightIcon}
            iconPosition="right"
            onClick={() => navigate("/competencies")}
            marginTop="mt-6"
          >
            Voir mes compétences&nbsp;&nbsp;
          </Button>
        </Card>
        <ColGrid numCols={2} gapX="gap-x-4" gapY="gap-y-4" marginTop="mt-4">
          <Card shadow={false}>
            <Flex justifyContent="justify-start">
              <Metric marginTop="mt-2" truncate={true}>
                {progression.failure}
              </Metric>
              &nbsp;&nbsp;
              <Badge text="🚨" color="red" marginTop="mt-2" />
            </Flex>
            <Text>Compétences échouées</Text>
          </Card>

          <Card shadow={false}>
            <Metric marginTop="mt-2" truncate={true}>
              {progression.unrated}
            </Metric>
            <Text>Compétences non-évaluées</Text>
          </Card>
          <Card shadow={false}>
            <Metric marginTop="mt-2" truncate={true}>
              {projectCount}
            </Metric>
            <Text>Projets évalués</Text>
          </Card>
          <Card shadow={false}>
            <Metric marginTop="mt-2" truncate={true}>
              {withoutFailure} / {subCategories}
            </Metric>
            <Text>Catégories sans échec</Text>
          </Card>
        </ColGrid>
        <Footer>
          <Button
            variant="light"
            size="sm"
            text="Voir sur github"
            icon={Github}
            iconPosition="left"
            onClick={() =>
              window.open("https://github.com/Oriun/epitech-competencies-stats")
            }
          />
        </Footer>
      </Card>
    </>
  );
};

export default Home;
