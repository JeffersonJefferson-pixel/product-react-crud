import React, { PropsWithChildren } from 'react'
import Menu from './components/Menu'
import Nav from './components/Nav'

function Wrapper(props: PropsWithChildren) {
  return (
    <div>
      <Nav />
      
      <div className="container-fluid">
        <div className="row">

          <Menu />
  
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Wrapper