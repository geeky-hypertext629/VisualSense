// import { Main } from 'next/document'
import React from 'react'

const Layout = ({children}: {children : React.ReactNode}) => {
  return (
    <main className='auth'>
        {children}
    </main>
  )
}

export default Layout
