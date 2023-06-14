import Alert from './Alert';
import { useGlobalContext } from './context';

const Form = () => {
  const { alert, name, handleSubmit, handleChange, isEditing } = useGlobalContext();

  return (
    <form className='form' onSubmit={handleSubmit}>
      {alert.show && <Alert />}
      <h3>to do list</h3>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={name}
          onChange={handleChange}
          placeholder='e.g. buy eggs'
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;
