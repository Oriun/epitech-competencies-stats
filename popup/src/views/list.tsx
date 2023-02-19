import {
  Card,
  Text,
  Bold,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  MultiSelectBox,
  MultiSelectBoxItem,
  Title,
  Flex,
  ColGrid,
  Button,
} from "@tremor/react";
import React from "react";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";
import GandalfContext from "../context/gandalf.context";
import {
  ColorForMark,
  GandalfStatus,
  getCompetencies,
  getSubcategories,
} from "../services/gandalf.service";
import { GandalfCompentency } from "../types/gandalf.types";
import { useNavigate } from "react-router-dom";
import useStorage from "../hooks/useStorage";
import Header from "../component/header";

const List: React.FC = () => {
  const navigate = useNavigate();
  const data = React.useContext(GandalfContext);
  const categories = React.useMemo(() => getSubcategories(data), [data]);
  const competencies = React.useMemo(() => getCompetencies(data), [data]);
  const [selectedCategories, setSelectedCategories] = useStorage<string[]>(
    "selectedCategories",
    []
  );
  const [selectedMarks, setSelectedMarks] = useStorage<string[]>(
    "selectedMarks",
    []
  );
  if (!selectedMarks || !selectedCategories) return null;

  const filterByCategory = (category: GandalfCompentency) =>
    selectedCategories.some((selected) => category.code.startsWith(selected)) ||
    selectedCategories.length === 0;
  const filterByMark = (category: GandalfCompentency) =>
    selectedMarks.includes(category.status) || selectedMarks.length === 0;

  const matchingFilters = competencies
    .filter(filterByCategory)
    .filter(filterByMark);

  let resultPhrase = `${matchingFilters.length} compétences`;
  if (selectedCategories.length > 0) {
    resultPhrase += ` dans la catégorie ${selectedCategories.join(", ")}`;
  }
  if (selectedMarks.length > 0) {
    resultPhrase += ` avec le(s) marquage(s) ${selectedMarks.join(", ")}`;
  }

  const openDetails = (category: GandalfCompentency) => () =>
    navigate(`/details/${category.code}`);
  return (
    <>
      <Header title="Dexter - Mes Compétences" backUrl="/" />
      <Card shadow marginTop="mt-4">
        <ColGrid numCols={1} gapY="gap-y-2">
          <ColGrid numCols={1} gapY="gap-y-1">
            <Bold>Filtrer par catégories</Bold>
            <MultiSelectBox
              value={selectedCategories}
              onValueChange={(value: string[]) => setSelectedCategories(value)}
              placeholder="Toutes les catégories"
              maxWidth="max-w-md"
            >
              {categories.map((item) => (
                <MultiSelectBoxItem
                  key={item.code}
                  value={item.code}
                  text={item.code + " - " + item.name}
                />
              ))}
            </MultiSelectBox>
          </ColGrid>
          <ColGrid numCols={1} gapY="gap-y-1">
            <Bold>Filtrer par status</Bold>
            <MultiSelectBox
              value={selectedMarks}
              onValueChange={(value: string[]) => setSelectedMarks(value)}
              placeholder="Tous les status"
              maxWidth="max-w-md"
            >
              {GandalfStatus.map((item) => (
                <MultiSelectBoxItem key={item} value={item} text={item} />
              ))}
            </MultiSelectBox>
          </ColGrid>
        </ColGrid>
        <Flex marginTop="mt-4">
          <Badge text={resultPhrase} size="xs" color="blue" />
        </Flex>
        <Table marginTop="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Code</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {matchingFilters.map((item) => (
              <TableRow key={item.code}>
                <TableCell>
                  <Button
                    variant="light"
                    color="slate"
                    text={item.code}
                    onClick={openDetails(item)}
                  />
                </TableCell>
                <TableCell>
                  <Badge
                    text={item.status}
                    size="xs"
                    color={ColorForMark[item.status]}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    color="slate"
                    text={item.name}
                    onClick={openDetails(item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default List;
