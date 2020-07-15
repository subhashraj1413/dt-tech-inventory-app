import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TransformIcon from '@material-ui/icons/Transform';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import styles from "assets/jss/material-kit-react/views/landingPageSections/inventoryListStyle.js";

const useStyles = makeStyles(styles);



export default function InventorySelectionBoard(props) {
  const classes = useStyles();
  const { inventorySelectedItems } = props;

  return (
    <div className={classes.section}>
     
     <GridContainer justify="center">
     <GridItem xs={12} sm={12} md={12}>     
        
          <List>
            {inventorySelectedItems.map((item, i) => {
              console.log(item);
              return (
                <ListItem key={i} draggable={props.draggable} 
               
                >
                  <ListItemAvatar>
                    <Avatar>
                      <AccountBalanceWalletIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listItemText}
                    primary={item.name}
                    secondary={item.price || null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <TransformIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
        

          </List>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}
