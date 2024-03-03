import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/basketball.svg";
import ColorModeSwitch from "./colorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image boxSize="50px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
