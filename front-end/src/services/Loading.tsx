import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: 9999,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
}));

type Props = {
  isLoading?: boolean;
};

const Loading: React.FC<Props> = (props) => {
  const { isLoading } = props;
  const [show, setVisible] = React.useState(isLoading);
  const classes = useStyles();

  React.useEffect(() => {
    if (show !== isLoading) {
      setVisible(isLoading);
    }
  }, [isLoading, show]);

  if (!show) return null;
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
