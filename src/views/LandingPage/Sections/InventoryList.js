import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TransformIcon from '@material-ui/icons/Transform';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


import styles from "assets/jss/material-kit-react/views/landingPageSections/inventoryListStyle.js";

const useStyles = makeStyles(styles);



export default function InventoryList(props) {
  const classes = useStyles();
  const [secondary] = React.useState(true);
  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };
  return (
              
      <ListItem draggable={props.draggable} 
      onDragStart={(e) =>onDragStart(e, props.invoiceId)}
      >
        <ListItemAvatar>
          <Avatar>
            <AccountBalanceWalletIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary={props.name}
          secondary={secondary ? props.price: null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <TransformIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
     
  );
}
