import React from "react";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

function Privacy() {
  return (
    <>
      <MKBox position="fixed" top="0" width="100%" zIndex={10}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          sticky
        />
      </MKBox>

      <MKBox mt={14} py={6}>
        <Container maxWidth="md">
          <MKTypography variant="h4" gutterBottom>
            Privacy Policy
          </MKTypography>

          <MKTypography variant="body1" paragraph>
            At MediCircuit, we are committed to protecting your privacy. This Privacy Policy explain
            how we collect, use, disclose, and safeguard your information when you visit our website
            or use our services.
          </MKTypography>

          <MKTypography variant="h6" gutterBottom>
            Information We Collect
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            We may collect personal information that you voluntarily provide to us when you:
          </MKTypography>
          <ul>
            <li>Contact us through forms or email.</li>
            <li>Subscribe to our newsletters.</li>
            <li>Make a purchase or register for a service.</li>
          </ul>

          <MKTypography variant="h6" gutterBottom>
            How We Use Your Information
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            We use the information we collect to:
          </MKTypography>
          <ul>
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve, personalize, and expand our website.</li>
            <li>Understand and analyze how you use our services.</li>
            <li>Communicate with you for support, updates, and promotional purposes.</li>
          </ul>

          <MKTypography variant="h6" gutterBottom>
            Sharing Your Information
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            We do not sell your personal information. We may share data with third-party service
            providers who assist us in delivering our services and operating our business, under
            confidentiality agreements.
          </MKTypography>

          <MKTypography variant="h6" gutterBottom>
            Data Security
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            We implement appropriate security measures to protect your data from unauthorized
            access, disclosure, or destruction. However, no method of transmission over the Internet
            is 100% secure.
          </MKTypography>

          <MKTypography variant="h6" gutterBottom>
            Your Rights
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            You have the right to access, correct, or delete your personal information. Please
            contact us if you wish to exercise these rights.
          </MKTypography>

          <MKTypography variant="h6" gutterBottom>
            Changes to This Policy
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with a revised effective date.
          </MKTypography>

          <MKTypography variant="h6" gutterBottom>
            Contact Us
          </MKTypography>
          <MKTypography variant="body1" paragraph>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </MKTypography>
          <MKTypography variant="body1">
            <strong>Email:</strong> privacy@medicircuit.com
            <br />
            <strong>Phone:</strong> +255 743 325 964
            <br />
            <strong>Address:</strong> MediCircuit, Tanzania
          </MKTypography>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Privacy;
