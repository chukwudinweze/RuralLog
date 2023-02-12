import { Stack } from "@mui/system";
import React from "react";
import AgroProduct from "./AgroProduct";
import { data } from "./data";

const AgroProducts = () => {
  return (
    <Stack
      flexWrap="wrap"
      padding="50px 100px"
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      {data.map((item) => (
        <AgroProduct {...item} />
      ))}
    </Stack>
  );
};

export default AgroProducts;
