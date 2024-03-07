import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import usePlatforms from "../hook/usePlatforms";
import { Platform } from "../hook/useGames";
import { useState } from "react";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [platformName, setPlatformName] = useState("Platforms");
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform);
              setPlatformName(platform.name);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
