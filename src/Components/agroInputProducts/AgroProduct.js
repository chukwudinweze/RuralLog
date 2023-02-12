import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { goldColor } from "../global/colors";

const AgroProduct = ({ name, price, img }) => {
  return (
    <Box
      sx={{ width: { xs: "100%", sm: "50%", lg: "25%", padding: "0 10px" } }}
    >
      <Paper
        sx={{
          minHeight: "393.5px",
          marginTop: "20px",
          width: "100%",
          ":hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          },
        }}
      >
        <Stack spacing={0} width="100%" sx={{ padding: "25px 16px " }}>
          <Link>
            <Avatar
              sx={{ width: "100%", height: "200px" }}
              alt="input"
              src={img}
              variant="square"
            />
            <Stack marginTop="40px">
              <Typography
                color="#292b2c"
                variant="body1"
                fontSize="16px"
                fontWeight={700}
              >
                {name}
              </Typography>
              <Typography
                color="#4f4a37"
                variant="body1"
                fontSize="16px"
                fontWeight={500}
              >
                &#8358;{price}
              </Typography>
            </Stack>
          </Link>
          <Button
            sx={{
              border: `2px solid ${goldColor}`,
              padding: "8.5px",
              color: "#4f4a37",
              width: {
                sx: "100%",
                sm: "55%",
                borderRadius: "20px",
                marginTop: "10px",
                ":hover": {
                  backgroundColor: "#ffcd1e",
                },
              },
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AgroProduct;
