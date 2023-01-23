import React from "react";
import {
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import states from "./states";
import Languages from "./SelectLanguages";

const AgentRegistration = () => {
  const hangleSubmit = () => {
    alert("confirm you want to become an agent");
  };
  return (
    <Box
      component="form"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "#fff",
        paddingLeft: { xs: "10px", sm: "50px", lg: "20px" },
        paddingRight: { xs: "10px", sm: "50px", lg: "20px" },
        paddingTop: { xs: "10px", sm: "20px", lg: "50px" },
        paddingBottom: { xs: "10px", sm: "20px", lg: "50px" },
        marginLeft: { xs: "10px", sm: "50px", lg: "200px" },
        marginRight: { xs: "10px", sm: "50px", lg: "200px" },
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",

        // marginRight: "200px",
      }}
    >
      <form onSubmit={hangleSubmit}>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="700"
              color="#2a750d"
              gutterBottomn
            >
              Become Agent Today, Earn Forever
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              id="outlined-basic"
              label="Business Name"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="state"
              defaultValue="EUR"
              // helperText="Please select your currency"
              fullWidth
              size="medium"
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-business-registered"
              select
              label="Is Your Business registered"
              defaultValue="No"
              // helperText="Please select your state"
              fullWidth
              size="medium"
            >
              {["NO", "YES"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Business Location"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Home Address"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              // helperText="Incorrect entry."
              size="medium"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              id="outlined-business-registered"
              select
              label="Years of Customer Experience"
              defaultValue="No"
              // helperText="Please select your state"
              fullWidth
              size="medium"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10 and above"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} sx={{ width: "100%" }}>
            <Languages />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} sx={{ width: "100%" }}>
            <Stack
              spacing={1}
              sx={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid rgb(164, 162, 162)",
                ":hover": { border: "2px solid #2a750d" },
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                Upload a Valid ID
              </Typography>

              <input
                accept="image/*"
                multiple
                type="file"
                id="pictures"
                name="pictures"
                // onChange={(e) =>
                //   formik.setFieldValue("pictures", [...e.target.files])
                // }
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} sx={{ width: "100%" }}>
            <Stack
              spacing={1}
              sx={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid rgb(164, 162, 162)",
                ":hover": { border: "2px solid #2a750d" },
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                Upload CV/Business Profile
              </Typography>

              <input
                accept="application/pdf, application/vnd.ms-excel"
                multiple
                type="file"
                id="pictures"
                name="pictures"
                // onChange={(e) =>
                //   formik.setFieldValue("pictures", [...e.target.files])
                // }
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} sx={{ width: "100%" }}>
            <Stack
              spacing={1}
              sx={{
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid rgb(164, 162, 162)",
                ":hover": { border: "2px solid #2a750d" },
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "10px" }}>
                Upload a Letter of Application
              </Typography>

              <input
                accept="application/pdf, application/vnd.ms-excel"
                multiple
                type="file"
                id="pictures"
                name="pictures"
                // onChange={(e) =>
                //   formik.setFieldValue("pictures", [...e.target.files])
                // }
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} sx={{ width: "100%" }}>
            <Box sx={{ width: "70%", margin: "0 auto", marginTop: "30px" }}>
              {/* <button type="submit"></button> */}
              <Button
                type="submit"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#409320",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#2a750d",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AgentRegistration;
