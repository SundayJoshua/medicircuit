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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/medicine.png";
import post2 from "assets/images/device-array.png";
import post3 from "assets/images/rnd.png";
import post4 from "assets/images/info.jpeg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Our Core Services
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Pharmaceutical Product Distribution"
              description="Marketing, trading, import/export of quality medicines, drugs, and medical consumables."
              action={{
                type: "internal",
                route: "/products",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Medical Equipment & Technology"
              description="Supplying and distributing advanced pharmaceutical machinery, medical equipment, lab instruments, and diagnostic tools."
              action={{
                type: "internal",
                route: "/products",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Research & Development"
              description="Engaging in cutting-edge R&D in pharmaceuticals, biotechnology, nanotechnology and medical diagnostics."
              action={{
                type: "internal",
                route: "/products",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="HealthTech"
              description="Providing API Services that intergrate devices, Hospital Information Systems and Electronic Health Records. Allowing real time monitoring and seamless data sharing"
              action={{
                type: "internal",
                route: "/products",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
