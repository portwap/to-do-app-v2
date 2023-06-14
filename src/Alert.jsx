import { useEffect } from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const { alert, showAlert } = useGlobalContext();

  const { show, type, msg } = alert;

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        showAlert();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
