import { title } from "assets/jss/material-kit-react.js";

const inventoryStyle = {
  section: {
    minHeight: "400px",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
  },
  listItem:{
    marginBottom: "1rem",
    marginTop: "30px",
    backgroundColor: "#1976d2",
    cursor: "pointer"
  },
  selectedListItem:{
    marginBottom: "1rem",
    marginTop: "30px",
    backgroundColor: "#f50057",
    cursor: "pointer"
  },
  listItemText:{
    color: "#fff"
  },
  icon:{
    color: "#fff",
    fontSize: "2rem",
  },
  description: {
    color: "#fff",
    " p": {
      color: "#fff"
    }
  }
};

export default inventoryStyle;
