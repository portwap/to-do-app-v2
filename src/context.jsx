import { createContext, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid/non-secure';

const AppContext = createContext();

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

export const AppProvider = ({ children }) => {
  const maxInputLength = 70;

  const [name, setName] = useState('');
  const [list, setList] = useState(defaultList);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
      return;
    } else if (name && isEditing) {
      const newList = list.map((item) => {
        if (item.id === editID) {
          if (item.title !== name) {
            setEditID(null);
            setIsEditing(false);
            setName('');
            showAlert(true, 'success', 'value changed');
            return { ...item, title: name };
          }
          if (item.title === name) {
            setEditID(null);
            setIsEditing(false);
            setName('');
            showAlert(true, 'danger', 'you left the same value');
            return item;
          }
        }
        return item;
      });
      setList(newList);
    } else {
      const newItem = {
        id: nanoid(),
        title: name,
        strikethrough: false,
        bold: false,
        checked: false,
      };
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'success', 'item added to the list');
    }
  };

  const handleChange = (event) => {
    if (event.target.value.length >= maxInputLength) {
      showAlert(true, 'danger', 'Maximum field length is 70 characters');
    }
    setName(event.target.value.slice(0, maxInputLength));
  };

  const editItem = (id) => {
    const tempList = list;
    const editedItem = tempList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editedItem.title);
  };

  const removeItem = (itemID) => {
    const tempList = list;
    const newList = tempList.filter((item) => item.id !== itemID);
    setList(newList);
    showAlert(true, 'success', 'item deleted');
  };

  const strikeText = (id, strikethrough) => {
    const tempList = list;
    const newList = tempList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, strikethrough: !item.strikethrough };
        return newItem;
      }
      return item;
    });
    setList(newList);
    showAlert(true, 'success', `${strikethrough ? 'strikethrough removed' : 'text is crossed out'}`);
  };

  const boldText = (id, bold) => {
    const tempList = list;
    const newList = tempList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, bold: !item.bold };
        return newItem;
      }
      return item;
    });
    setList(newList);
    showAlert(true, 'success', `${bold ? 'bold removed' : ' text is bold'}`);
  };

  return (
    <AppContext.Provider
      value={{
        list,
        alert,
        isEditing,
        name,
        showAlert,
        handleSubmit,
        handleChange,
        removeItem,
        strikeText,
        boldText,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
