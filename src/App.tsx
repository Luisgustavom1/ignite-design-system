import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Text } from './components/text';
import './styles/global.css'

function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100'>
      <Heading size='lg'>
        Ignite lab
      </Heading>

      <Text size='lg' className='text-gray-400'>
        Faça login e comece a usar!
      </Text>
    </div>
  )
}

export default App;
