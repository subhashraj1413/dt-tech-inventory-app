import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import styles from "assets/jss/material-kit-react/views/landingPageSections/inventoryListStyle.js";

const useStyles = makeStyles(styles);

const InventoryList = ({ inventoryStoreList }) => {
  const classes = useStyles();

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  return (
    <List>
      {inventoryStoreList &&
        inventoryStoreList.map((item, i) => {
          return (
            <ListItem
              key={i}
              draggable={item.draggable}
              onDragStart={(e) => onDragStart(e, item.invoiceId)}
              className={classNames({
                [classes.listItem]: item.draggable,
                [classes.listItemDisable]: !item.draggable,
              })}
            >
              <ListItemAvatar>
                <Avatar>
                  <AccountBalanceWalletIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className={classes.listItemText}
                primary={item.name}
                secondary={`AED ${item.price}` || null}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  className={classes.icon}
                  size="medium"
                >
                  {item.draggable ? (
                    <ArtTrackIcon />
                  ) : (
                    <CheckCircleOutlineIcon />
                  )}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    inventoryStoreList: state.inventory.inventoryListItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);
