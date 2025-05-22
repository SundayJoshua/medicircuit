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

// Material Kit 2 React examples
//import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">The African market</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            is only 0.3% represented in HealthTech
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Africa’s medical devices sector exports over $600 million annually, yet represents only
            0.3% of the global market—highlighting a vast opportunity for growth and impact. At
            MediCircuit, we’re bridging this gap by developing and manufacturing medical devices
            locally—a strategy that lowers costs, increases accessibility, and addresses the
            continent’s diverse healthcare needs.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
