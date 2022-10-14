import './styles/global.css';
import { Text } from './components/Text'

export function App() {

  return (
    
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center gap-4' >

      <h1 className='text-gray-100 text-bold text-md' >Hello World - App</h1>

      <button className="px-4 py-2 rounded bg-cyan-500 text-gray-900 font-bold">
        Enviar
      </button>

    </div>
  )
}
