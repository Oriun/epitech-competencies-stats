import { Card, Title, Flex } from "@tremor/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowNarrowLeftIcon from "../assets/arrow-narrow-left-icon";
import Settings from "../assets/settings";
import GandalfContext from "../context/gandalf.context";
import Menu from "./menu";

type HeaderProps = {
  title: string;
  backUrl?: string;
};
const Header: React.FC<HeaderProps> = ({ title, backUrl }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <Card maxWidth="max-w-xl" shadow decoration="">
      <Flex>
        <Flex justifyContent="justify-start">
          {backUrl ? (
            <>
              <ArrowNarrowLeftIcon onClick={() => navigate(backUrl)} />
              &nbsp;&nbsp;
            </>
          ) : null}
          <Title truncate>Dexter - {title}</Title>
        </Flex>
        <Settings onClick={() => setShowMenu(true)} />
      </Flex>
      {showMenu ? <Menu close={() => setShowMenu(false)} /> : null}
    </Card>
  );
};

export default Header;
