import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username='Chris' post='Software Engineer'/>
      <Card username='John' post='Management Consultant'/>
      <Card/>
    </>
  )
}

export default App
