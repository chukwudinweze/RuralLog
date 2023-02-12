import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AgroProduct from "./AgroProduct";
import { data } from "./data";

const AgroProducts = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexWrap="wrap"
      //   gap="2px"
      padding={{ xs: "30px 50px", sm: "50px 100px", lg: "50px 20px" }}
      direction="row"
      width="100%"
    >
      {data.map((item) => (
        <AgroProduct {...item} />
      ))}
    </Box>
  );
};

export default AgroProducts;
