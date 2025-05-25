/* eslint-disable react/jsx-no-duplicate-props */
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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
//import MKInput from "components/MKInput";
//import MKButton from "components/MKButton";
import macbook from "assets/images/sales.jpg";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} lg={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h2">Empowering health through innovation</MKTypography>
            <MKTypography variant="body1" color="text" mb={3}>
              Explore our carefully crafted range of pharmaceutical products designed to support
              every step of your wellness journey.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} lg={6} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                sx={{ borderRadius: "16px" }}
                component="img"
                src={macbook}
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
