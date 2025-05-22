/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
//import MKButton from "components/MKButton";

// Presentation page components
//import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";
//import { Card } from "@mui/material";

function DesignBlocks() {
  const renderData = data.map(({ title, description }) => (
    <Grid container spacing={3} sx={{ mb: 1 }} key={title}>
      <Grid item xs={12} lg={7}>
        <MKTypography variant="h1" fontWeight="bold" mb={4}>
          {title}
          <Link />
        </MKTypography>
        <MKTypography variant="h4" fontWeight="regular" color="secondary" mb={5}>
          {description}
        </MKTypography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ mb: 2 }}>
        <img src="assets/images/afri-crystal.png" alt="Brand" />
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
