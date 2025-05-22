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
//import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/consulting.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Who we are
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox
              component="img"
              src={team1}
              alt="Team Member"
              width="100%"
              height="auto"
              borderRadius="lg"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <MKTypography color="white" variant="h3" mb={2}>
                Our mission is clear
              </MKTypography>
              <MKTypography color="white">
                We are committed to bridging this critical gap by designing and manufacturing
                affordable, locally-engineered medical devices starting with a cost-effective
                Patient Monitoring System purpose-built for African healthcare environments. Our
                solutions are crafted with the unique needs of our hospitals, clinics, and
                communities in mind, ensuring they are not only accessible but also robust,
                scalable, and reliable.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
