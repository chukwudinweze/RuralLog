import { ArrowBack } from "@mui/icons-material";
import { Paper, IconButton, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ label, background }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "10px",
        paddingLeft: "20px",
        backgroundColor: { background },
        borderRadius: "0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "99999",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={10}>
        <IconButton
          sx={{
            width: "50px",
            height: "50px",
            color: "#fff",
          }}
          aria-label="back arrow"
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
        <Typography fontWeight={700} variant="h1" component="h1" color="#fff">
          {label}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PageHeader;
