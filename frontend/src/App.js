import React from 'react'
import './App.css'
import { useState } from 'react'
import LayoutCtrl from './components/LayoutCtrl'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import AttendenceCheck from './components/AttendenceCheck'

function App() {
  const [userObj, setUserObj] = useState({
    id: 1,
    email: '',
    name: '김교수',
    type: 'S',
    phone: '',
    grade: 1,
  })

  return (
    <div className="App">
      <BrowserRouter>
        <LayoutCtrl userObj={userObj}>
          <Route
            path="/"
            exact
            component={() => {
              if (userObj) {
                return <Home userObj={userObj} />
              }
              return <Login />
            }}
          />
          <Route
            path="/signup/teacher"
            render={() => <Signup isStudentScreen={false} />}
          />
          <Route
            path="/signup/student"
            render={() => <Signup isStudentScreen={true} />}
          />
          <Route path="/test" render={() => <AttendenceCheck />} />
        </LayoutCtrl>
      </BrowserRouter>
    </div>
  )
}

export default App
