import Form from './Form';
import List from './List';
import { useGlobalContext } from './context';

function App() {
  const { list } = useGlobalContext();

  return (
    <section className='section-center'>
      <Form />
      {list.length > 0 && <List />}
    </section>
  );
}

export default App;

// Добавлен contextAPI
// привязано к netlify через github
// git push