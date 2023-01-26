import { useState } from 'react'
import Footer from '../../../components/footer/footer'
import { Login } from './Login'
import { RegisterPart } from './RegisterPart'
import { Reset } from './Reset'

export const AuthContainer = () => {

  const [authenticate, setAuthenticate] = useState({
    Login: true,
    RegisterPart: false,
    Reset: false
  })

  const handleRegister = () => {
    setAuthenticate({
      Login: false,
      RegisterPart: true,
      Reset: false
    }
    )
  }

  const handleLogin = () => {
    setAuthenticate({
      Login: true,
      RegisterPart: false,
      Reset: false
    }
    )
  }

  const handleReset = () => {
    setAuthenticate({
      Login: false,
      RegisterPart: false,
      Reset: true
    }
    )
  }


  return (
    <section className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-100 h-auto'>
        {authenticate.Login && <Login onRegisterPart={handleRegister} onReset={handleReset} />}
        {authenticate.RegisterPart && <RegisterPart onLogin={handleLogin} />}
        {authenticate.Reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  )
}


