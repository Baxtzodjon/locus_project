import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainBlock from './Components/MainBlock/MainBlock'
import WorkingBlock from './Components/WorkingBlock/WorkingBlock'
import MissionBlock from './Components/MissionBlock/MissionBlock'
import ProjectBlock from './Components/ProjectBlock/ProjectBlock'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

function App() {

  /* const [users, setUsers] = useState(["Alex", "Jordan", "Bob"])

  function handeSubmit(e) {
    e.preventDefault();

    const name = new FormData(e.target).get('name')

    setUsers([...users, name])
  } */

  return (
    <>
    <div className='container'>

      <Header></Header>
      <MainBlock></MainBlock>
      <WorkingBlock></WorkingBlock>
      <MissionBlock></MissionBlock>
      <ProjectBlock></ProjectBlock>
      <Testimonial></Testimonial>
      <Contact></Contact>

    </div>

    {/* <center>
      <form action="" onSubmit={handeSubmit}>
        <input type="text" name='name' />
        <button>add new user</button>
      </form>

      <ul>
        {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
      </ul>
    </center> */}
    </>
  )
}

export default App
