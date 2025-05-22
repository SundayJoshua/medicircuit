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
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "components/MKTypography";
import ProductList from "./ProductList";

function ProductsInfo() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12} lg={12}>
                <MKBox mt={6}>
                  <MKTypography variant="h4" mb={3}>
                    Product Listings
                  </MKTypography>
                  <MKTypography variant="h2">
                    Explore an overview of our products and search for information on our most
                    popular products.
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 6 } }}>
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProductsInfo;
