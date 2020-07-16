import React from 'react';
import { connect } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const InventoryHeader  = ({inventoryAddedItems}) => {
  const classes = useStyles();
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const itemCartValue = React.useMemo(()=>{
    const totalCount = inventoryAddedItems.length;
    const msgTotal = inventoryAddedItems.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);
    return (
      <>
      <Chip
    icon={<FaceIcon />}
    label={`Total Items ${totalCount}`}
    onDelete={handleDelete}
    color="secondary"
  />
  <Chip
    icon={<DoneIcon />}
    label={`Total Amount ${msgTotal} AED`}
    onDelete={handleDelete}
    color="secondary"
  />
  </>
    );

  },[inventoryAddedItems])
console.log(inventoryAddedItems);
  return (
    <div className={classes.root}>
      {itemCartValue}
      
    </div>
  );
}
const mapStateToProps = state => {
  return {
    inventoryAddedItems: state.inventory.inventoryAddedItems
  } 
   
 };
 
 const mapDispatchToProps = (dispatch) => {
   
  return {
    dispatch,
    
  }
 }
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryHeader);