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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";

// Images
//import bgFront from "assets/images/portable-monitor.png";
//import bgBack from "assets/images/patient-monitor.png";

const bgFront = "/assets/images/bg-front.png";
const bgBack = "/assets/images/bg-back.png";

function Information() {
  return (
    <MKBox component="section" py={1} my={1}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={12} mb={2} textAlign="center">
            <MKBox>
              <MKTypography variant="h2" fontWeight="bold" mb={1}>
                Our Solutions
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Portable
                    <br />
                    Design
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Read specs",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Vital Signs Monitoring"
                  description="Measures and displays parameters such as ECG (heart rate), SpO₂ (oxygen saturation), NIBP (non-invasive blood pressure), temperature, and respiratory rate."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Display Screen"
                  description="High-resolution LCD or LED screen (typically 10–15 inches) for real-time waveform and numerical data display."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="alarm"
                  title="Alarm System"
                  description="Built-in audio and visual alarms to alert caregivers when readings fall outside safe ranges."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Connectivity"
                  description="Support for USB, Ethernet, and sometimes Wi-Fi or Bluetooth for data export, integration with hospital information systems (HIS), or remote monitoring."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
