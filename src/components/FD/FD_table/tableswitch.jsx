// Imported from Material UI
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity)
    }
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600]
  }
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ColorSwitches({ handleChange }) {
  const [checked, setChecked] = React.useState(true);

  const toggle = () => {
    setChecked((status) => !status);
    handleChange();
  };

  return (
    <div>
      <Switch {...label} color="warning" onChange={toggle} />
    </div>
  );
}