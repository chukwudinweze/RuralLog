import { Box } from "@mui/material";
import React from "react";
import AgroProducts from "../Components/agroInputProducts/AgroProducts";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/global/PageHeader";
import PageSlideShow from "../Components/global/PageSlideShow";

const AgroInputPage = () => {
  return (
    <Box>
      <PageHeader label="Agro Input" background="transparent" />
      <PageSlideShow />
      <AgroProducts />
      <Footer />
    </Box>
  );
};

export default AgroInputPage;
