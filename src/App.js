import './App.css'
import { AddKontak, ListKontak } from './components'
const App = () => {
  return (
    <>
    <div className='App'>
      <h2>Aplikasi Kontak App</h2>
      <hr/>
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
    </>
  )
}

export default App