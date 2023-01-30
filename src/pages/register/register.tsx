import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './component/Login'
import { RegisterPart } from './component/RegisterPart'
import { Reset } from './component/Reset'

const Register = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPart />} />
            <Route path="/reset" element={<Reset />} />
        </Routes>

    )
}

export default Register