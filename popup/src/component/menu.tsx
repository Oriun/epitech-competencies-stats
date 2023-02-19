import {
  Block,
  Button,
  Card,
  ColGrid,
  Flex,
  Metric,
  Title,
} from "@tremor/react";
import React from "react";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";
import GandalfContext from "../context/gandalf.context";
import { download } from "../services/download.service";
import { clearStorage } from "../services/gandalf.service";

type MenuProps = {
  close: () => void;
};

const Menu: React.FC<MenuProps> = ({ close }) => {
  const data = React.useContext(GandalfContext);

  async function clear() {
    await clearStorage();
    location.reload();
  }
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "white",
        zIndex: 100,
        padding: 8,
      }}
    >
      <Card maxWidth="max-w-xl" shadow>
        <Flex>
          <Flex justifyContent="justify-start">
            <ArrowNarrowLeftIcon onClick={() => close()} />
            &nbsp;&nbsp;
            <Title truncate>Dexter - Paramètres</Title>
          </Flex>
        </Flex>
      </Card>
      <Block marginTop="mt-6" spaceY="space-y-4">
        <Card>
          <Button variant="light" onClick={() => download(data)}>
            Télécharger mes données
          </Button>
        </Card>
        <Card>
          <Button variant="light" color="red" onClick={clear}>
            Effacer le cache
          </Button>
        </Card>
      </Block>
    </div>
  );
};

export default Menu;
