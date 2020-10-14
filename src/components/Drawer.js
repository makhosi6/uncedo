import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import {
  FilterIcon,
  KnowledgeArticleIcon,
  PageListIcon,
  TrackersIcon,
  PermissionsIcon,
  LockIcon,
  WarningIcon,
  CircleFillIcon,
  ListIcon,
} from "@fluentui/react-icons";
import logo from "../assets/images/Hands & Heart.webp";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  title: {
    color: "#3f51b5",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const items = [
    {
      text: "Domestic Abuse: How to respond?",
      key: "one",
      url: "/topic",
    },
    {
      text: "What is Domestic Abuse?",
      key: "two",
      url: "/topic",
    },
    {
      text: "Support Organizations",
      key: "three",
      url: "/topic",
    },
    {
      text: "Know Your Legal Rights",
      key: "four",
      url: "/topic",
    },
    {
      text: "Digital Safety",
      key: "five",
      url: "/topic",
    },
    {
      text: "Safety Planning",
      key: "six",
      url: "/topic",
    },
    {
      text: "SOS",
      key: "seven",
      url: "/emergency/sos",
    },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Typography className={classes.title} variant="div" noWrap>
            <Link href="/">
              <img
                style={{ alignItems: "centre", objectFit: "contain" }}
                src={logo}
                alt="logo"
                width="100"
                height="30"
                sizes=""
                srcset={logo}
              />
              <span>Uncedo</span>
            </Link>{" "}
          </Typography>{" "}
        </ListItem>{" "}
        <Divider />
        {items.map((item) => (
          <ListItem
            onClick={(e) => {
              window.location.pathname = `${item.url}`;
            }}
            button
            key={item.key}
          >
            <ListItemIcon>{renderIcons(item.key)}</ListItemIcon>{" "}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>{" "}
    </div>
  );
  return (
    <div>
      <React.Fragment key="left">
        <ListIcon
          style={{
            color: "white",
            fontSize: "25px",
            padding: "15px",
            cursor: "pointer",
          }}
          onClick={toggleDrawer("left", true)}
        />{" "}
        <Drawer
          component="div"
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {" "}
          {list("left")}{" "}
        </Drawer>{" "}
      </React.Fragment>{" "}
    </div>
  );
}

function renderIcons(x) {
  switch (x) {
    case "one":
      return <FilterIcon style={st} />;
      break;
    case "two":
      return <KnowledgeArticleIcon style={st} />;
      break;
    case "three":
      return <PageListIcon style={st} />;
      break;
    case "four":
      return <TrackersIcon style={st} />;
      break;
    case "five":
      return <PermissionsIcon style={st} />;
      break;
    case "six":
      return <LockIcon style={st} />;
      break;
    case "seven":
      return <WarningIcon style={st} />;
    default:
      return <CircleFillIcon style={st} />;
  }
}

let st = {
  fontSize: "25px",
};
