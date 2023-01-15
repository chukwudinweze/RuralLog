import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AgentRegistration from "../Components/AgentRegistration/AgentRegistration";
import Footer from "../Components/Footer/Footer";
import styles from "./AgentRegistrationPage.module.css";

const AgentRegistrationPage = () => {
  return (
    <section>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        className={styles.regBackground}
      >
        <Grid item xs={12} sm={12} lg={12}>
          <AgentRegistration />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </section>
  );
};

export default AgentRegistrationPage;
