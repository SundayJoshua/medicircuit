import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableVirtuoso } from "react-virtuoso";
import rawData from "./productsData";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import { Box, Button } from "@mui/material";

// Flatten nested items
const data = rawData.flatMap((group) => group.items);

// A-Z letters
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={MKBox} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "collapse",
        "& td, & th": {
          border: "none",
        },
      }}
    />
  ),
  TableHead: () => null,
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function rowContent(index, row) {
  return (
    <>
      {/* First cell: First letter */}
      <TableCell width="50px" align="center">
        <MKTypography variant="h6" color="dark">
          {row.name[0].toUpperCase()}
        </MKTypography>
      </TableCell>

      {/* Second cell: Product name and description */}
      <TableCell>
        <MKTypography variant="h5" color="info">
          {row.name}
        </MKTypography>
        <MKTypography variant="body2">{row.description}</MKTypography>
      </TableCell>
    </>
  );
}

function ProductList() {
  const [selectedLetter, setSelectedLetter] = React.useState(null);

  const filteredData = selectedLetter
    ? data.filter((item) => item.name.toUpperCase().startsWith(selectedLetter))
    : data;

  return (
    <MKBox display="flex" width="100%">
      {/* Vertical A-Z Filter Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
          minWidth: "50px",
          maxHeight: "500px",
          overflowY: "auto",
          borderRight: "1px solid #eee",
        }}
      >
        {letters.map((letter) => (
          <Button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            variant={selectedLetter === letter ? "contained" : "text"}
            size="small"
            sx={{ minWidth: "30px", p: 0.5, mb: 0.5 }}
          >
            {letter}
          </Button>
        ))}
        <Button
          onClick={() => setSelectedLetter(null)}
          variant={!selectedLetter ? "contained" : "text"}
          size="small"
          sx={{ minWidth: "30px", mt: 1 }}
        >
          All
        </Button>
      </Box>

      {/* Table Area */}
      <MKBox flex={1}>
        <TableVirtuoso
          data={filteredData}
          components={VirtuosoTableComponents}
          itemContent={rowContent}
          style={{ height: 500 }}
        />
      </MKBox>
    </MKBox>
  );
}

export default ProductList;
