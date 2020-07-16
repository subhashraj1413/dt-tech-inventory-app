const inventory = (state = [], action) => {
    switch (action.type) {
      case 'ADD_INVENTORY':
          const disableItems = state.inventoryListItems.map(inventory =>
            (inventory.invoiceId === action.invoiceId)
              ? {...inventory, draggable: false,added: !inventory.added}
              : inventory
          );
        
        return {
            ...state,
            inventoryAddedItems: [
                ...state.inventoryAddedItems,
                {
                  invoiceId: action.invoiceId,
                  name: action.name,
                  price: action.price,
                  draggable: action.draggable,
                  added: action.added,
      
                }
              ],
            inventoryListItems: disableItems
        };

    case 'REMOVE_INVENTORY':       
        const filterRemovedItems = state.inventoryAddedItems.filter(item => item.invoiceId !== action.id);
        const enableItems = state.inventoryListItems.map(inventory =>
            (inventory.invoiceId === action.id)
              ? {...inventory, draggable: true,added: false}
              : inventory
          );
        return {
            ...state,
            inventoryAddedItems: filterRemovedItems,
            inventoryListItems: enableItems,
        };
     
      default:
        return {
            inventoryListItems: [
                { invoiceId: "101", name: "Item 101", price: 50, draggable: true, added: false },
                { invoiceId: "102", name: "Item 102", price: 100, draggable: true, added: false },
                { invoiceId: "103", name: "Item 103", price: 150, draggable: true, added: false },
                { invoiceId: "104", name: "Item 104", price: 202, draggable: true, added: false },
                { invoiceId: "105", name: "Item 105", price: 253, draggable: true, added: false },
                { invoiceId: "106", name: "Item 106", price: 205, draggable: true, added: false },
                { invoiceId: "107", name: "Item 107", price: 206, draggable: true, added: false },
                { invoiceId: "108", name: "Item 108", price: 230, draggable: true, added: false },
              ],
            inventoryAddedItems:[],  
            
        }
    }
  }
  
  export default inventory
  