// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Products from "pages/LandingPages/Products";
import Privacy from "layouts/pages/landing-pages/privacy-policy";
import Licenses from "pages/LandingPages/Licenses";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/icon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "MEDICIRCUIT",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "",
    },
    {
      icon: <InstagramIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "products", route: "/products", component: <Products /> },
        { name: "about us", route: "/about-us", component: <AboutUs /> },
        { name: "contact us", route: "/contact-us", component: <ContactUs /> },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "licenses", route: "/licenses", component: <Licenses /> },
        { name: "privacy policy", route: "", component: <Privacy /> },
        { name: "terms & conditions", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} MEDICIRCUIT{" "}
    </MKTypography>
  ),
};
