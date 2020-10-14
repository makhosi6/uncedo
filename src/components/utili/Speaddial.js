import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContactIcon } from "@fluentui/react-icons";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import { ChatIcon, ShieldAlertIcon } from "@fluentui/react-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "2147483647 !important",
    flexGrow: 1,
    maxWidth: "1000px",
    margin: "auto",
    bottom: "10px",
  },
  exampleWrapper: {
    position: "absolute",
    marginTop: "85vh",
    maxWidth: "1000px",
    margin: "auto",
    right: "20px",
    bottom: "20px",
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  {
    icon: (
      <ContactIcon
        onClick={(e) => {
          window.location.pathname = "/login";
        }}
        style={{ fontSize: "25px", fontWeight: "bolder" }}
      />
    ),
    name: "Sign In",
  },
  {
    icon: (
      <ChatIcon
        onClick={(e) => {
          window.location.pathname = "/chat/contacts";
        }}
        style={{ fontSize: "25px", fontWeight: "bolder" }}
      />
    ),
    name: "Chat",
  },
  {
    icon: (
      <ShieldAlertIcon
        onClick={(e) => {
          window.location.pathname = "/emergency/sos";
        }}
        style={{ fontSize: "25px", fontWeight: "bolder" }}
      />
    ),
    name: "Alert/SOS",
  },
];

export default function SpeedDials() {
  const classes = useStyles();
  const [direction] = React.useState("up");
  const [open, setOpen] = React.useState(false);
  const [hidden] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
