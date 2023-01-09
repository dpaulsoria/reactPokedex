import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InsightsIcon from "@mui/icons-material/Insights";
import GamesIcon from "@mui/icons-material/Games";
import HubIcon from "@mui/icons-material/Hub";

import { useNavigate } from "react-router-dom";

function BottomNav(props) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation className="bottomNav" value={value} onChange={handleChange}>
      <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Stats"
        value="baseStats"
        icon={<InsightsIcon />}
      />
      <BottomNavigationAction
        label="Moves"
        value="moves"
        icon={<GamesIcon />}
      />
      <BottomNavigationAction
        label="Abilities"
        value="abilities"
        icon={<HubIcon />}
      />
    </BottomNavigation>
  );
}

export { BottomNav };
