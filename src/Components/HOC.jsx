import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(Components) {
  function NewComponent() {
    return (
      <>
        <Header />
        <Components />
        <Footer />
      </>
    )
  }
  return NewComponent


}

export default HOC