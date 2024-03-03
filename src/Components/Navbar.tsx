import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/basketball.svg";
import React from "react";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text>Games</Text>
    </HStack>
  );
};

export default Navbar;
