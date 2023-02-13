import React from "react";
import Slider from "@mui/material/Slider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import states from "../global/states";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

const SortItem = () => {
  const [value1, setValue1] = React.useState([20, 37]);
  const [age, setAge] = React.useState("");
  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <Stack direction="row" width="100%" spacing={2}>
      <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          label="Enter Item name"
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange2}
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack
        width="100%"
        textAlign="center"
        border=".5px solid #d3d3d3"
        borderRadius="5px"
        padding="2px 10px"
      >
        Price range
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Stack>
    </Stack>
  );
};

export default SortItem;
