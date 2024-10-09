import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

import Login from './assets/Pages/Login'

function App() {

/*   const form = useForm(
    {mode:
      'uncontrolled'
    }
  );

  const hanldeSubmit => (values: typeof form.values){
    console.log(values);
  };
 */
  return (
    <MantineProvider>
      <Login/>
    </MantineProvider>
  )
}

export default App
