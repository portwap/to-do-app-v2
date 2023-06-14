// import { ADD_ITEM, DELETE_ITEM, BOLD_TEXT, STRIKE_TEXT, EDIT_ITEM } from './actions';
// import { nanoid } from 'nanoid/non-secure';

// export const reducer = (state, action) => {

//   switch (action.type) {
//     case DELETE_ITEM: {
//       const tempList = state.list;
//       const newList = tempList.filter((item) => item.id !== action.payload.itemID);
//       return { ...state, list: newList };
//     }

//     case ADD_ITEM: {
//       const newItem = {
//         id: nanoid(),
//         title: action.payload.name,
//         strikethrough: false,
//         bold: false,
//         checked: false,
//       };
//       const newList = [...state.list, newItem];
//       return { ...state, list: newList };
//     }

//     case BOLD_TEXT: {
//       const tempList = state.list;
//       const newList = tempList.map((item) => {
//         if (item.id === action.payload.id) {
//           const newItem = { ...item, bold: !item.bold };
//           return newItem;
//         }
//         return item;
//       });
//       return { ...state, list: newList };
//     }

//     case STRIKE_TEXT: {
//       const tempList = state.list;
//       const newList = tempList.map((item) => {
//         if (item.id === action.payload.id) {
//           const newItem = { ...item, strikethrough: !item.strikethrough };
//           return newItem;
//         }
//         return item;
//       });
//       return { ...state, list: newList };
//     }

//     case EDIT_ITEM: {
//       const tempList = state.list;
//       // const editedItem = tempList.find((item) => item.id === action.payload.id);
//       // setName(editedItem.title);
//       return { ...state, isEditing: true, editID: action.payload.id };
//     }

//     default: {
//       throw new Error(`no matching action type: ${action.type}`);
//     }
//   }
// };
