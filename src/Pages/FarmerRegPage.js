import { Box } from "@mui/system";
import React from "react";
import Footer from "../Components/Footer/Footer";
import FarmerReg from "../FarmersRegisteration/FarmerReg";

const FarmerRegPage = () => {
  return (
    <Box component="section">
      <FarmerReg />
      <Footer />
    </Box>
  );
};

export default FarmerRegPage;
