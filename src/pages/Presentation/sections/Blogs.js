// MUI & custom components
import { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

// Carousel item data
const carouselItems = [
  {
    name: "Innovation",
    description: "Advancing healthcare through cutting-edge medical technology.",
    image: "assets/images/innovate.png",
  },
  {
    name: "Access",
    description: "Expanding access to affordable medical devices.",
    image: "assets/images/medicine.png",
  },
  {
    name: "Impact",
    description: "Transforming patient outcomes across Africa.",
    image: "assets/images/people.png",
  },
  {
    name: "R&D",
    description: "Advancing healthcare through cutting-edge research and development.",
    image: "assets/images/rnd.png",
  },
  {
    name: "360 Marketing",
    description: "Driving growth through smart strategy and bold marketing.",
    image: "assets/images/impact.png",
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
        variant="h4"
        color="info"
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
