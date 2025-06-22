// MUI & custom components
import { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
//images
import post1 from "assets/images/innovate.png";
import post2 from "assets/images/medicine.png";
import post3 from "assets/images/people.png";
import post4 from "assets/images/rnd.png";
import post5 from "assets/images/impact.png";

// Carousel item data
const carouselItems = [
  {
    name: "Innovation",
    image: post1,
  },
  {
    name: "Access",
    image: post2,
  },
  {
    name: "Impact",
    image: post3,
  },
  {
    name: "R&D",
    image: post4,
  },
  {
    name: "Bold Marketing",
    image: post5,
  },
];

// Card component
function CarouselCard({ item }) {
  return (
    <Box
      sx={{
        width: 280,
        height: 300,
        m: 2,
        flex: "0 0 auto",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        borderRadius: 3,
        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <MKTypography
        variant="h3"
        color="light"
        mb={1}
        sx={{
          height: 40,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {item.name}
      </MKTypography>

      <MKTypography
        variant="body1"
        color="light"
        sx={{
          height: 60,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {item.description}
      </MKTypography>
    </Box>
  );
}

CarouselCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Main horizontal slider section with continuous scroll animation
function Blogs() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Duplicate content to make the loop seamless
    const duplicate = container.innerHTML;
    container.innerHTML += duplicate;

    // Animate scrolling
    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: 200000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel(); // cleanup
  }, []);

  return (
    <Container sx={{ mt: 5, mb: 8, overflow: "hidden" }}>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          width: "max-content", // Ensures content fits naturally
        }}
      >
        {carouselItems.concat(carouselItems).map((item, i) => (
          <Box key={i} sx={{ scrollSnapAlign: "start" }}>
            <CarouselCard item={item} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Blogs;
