import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/basketball.svg";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSelectSearchData: (searchData: string) => void;
}
const Navbar = ({ onSelectSearchData }: Props) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image boxSize="50px" src={logo} />
      <SearchInput
        onSearchData={(searchData) => onSelectSearchData(searchData)}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
