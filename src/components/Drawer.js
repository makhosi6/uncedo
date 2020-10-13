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
import { ListIcon } from "@fluentui/react-icons";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  title: {
    color: "#3f51b5",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
 const items = [{
   text: "Politics",
   key: "Inbox"
 }, {
   text: "Africa",
   key: "Draft"
 },{
   text: "Tech",
   key: "Send email"
 },{
   text: "Lifestyle",
   key: "Drafts"
 },
 {
   text: "Business",
   key: "Inbox"
 },{
   text: "Politics",
   key: "All mail"
 }];
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Typography className={classes.title} variant="div" noWrap>
            <Link href="/kelly-price">
              <img
                style={{ alignItems: "centre", objectFit: "contain" }}
                src="//upload.wikimedia.org/wikipedia/commons/1/1a/SONOFF-logo.png"
                alt="logo"
                width="100"
                height="30"
                sizes=""
                srcset="//upload.wikimedia.org/wikipedia/commons/1/1a/SONOFF-logo.png"
              />
            </Link>{" "}
          </Typography>{" "}
        </ListItem>{" "}
        <Divider />
{
  items.map((item) =>(
    <ListItem button key={item.key}>
          <ListItemIcon>
            {" "}
            {(item.key === "Inbox")? <InboxIcon />: <MailIcon />}
          </ListItemIcon>{" "}
          <ListItemText primary={item.text} />
        </ListItem>
  ))
}
      </List>{" "}
    </div>
  );
  return (
    <div>
      <React.Fragment key="left">
        <ListIcon style={{ color: "white", fontSize: "25px", padding: "15px", cursor: "pointer"}} onClick={toggleDrawer("left", true)} />{" "}
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