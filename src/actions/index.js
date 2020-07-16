export const addInventory = content => ({
  type: 'ADD_INVENTORY',
  ...content
})


export const toggleInventory = id => ({
  type: 'TOGGLE_INVENTORY',
  id
})

