import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#58cc02",
  },
  image: {
    marginLeft: "1px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
