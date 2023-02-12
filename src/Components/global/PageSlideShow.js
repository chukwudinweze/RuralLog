import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import coverImg from "../../assets/agro-input.jpeg";

const PageSlideShow = () => {
  return (
    <Box>
      <Avatar
        alt="Cindy Baker"
        src={coverImg}
        sx={{
          width: "100%",
          height: { xs: "150px", sm: "200px", lg: "300px" },
          borderRadius: "0",
          background: "#000",
        }}
      />
    </Box>
  );
};

export default PageSlideShow;
