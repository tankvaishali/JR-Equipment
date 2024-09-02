import React from 'react'
import ButtonHover from './ButtonHover'
import { Player } from '@lottiefiles/react-lottie-player'

function PageNotFound() {
  return (
    <>
            <div className='bg-secondary-subtle d-flex align-content-center align-items-center justify-content-center w-75 mx-auto' style={{height:"100vh" }}>
          <div >
          <div className='text-center' >
              <Player src={"https://lottie.host/5e41510f-ccf9-48e4-8ac5-89e86f39f4ea/2S6QT1VqNt.json"}
               autoplay
               loop
               controls 
               className="w-100 shadow-lg"
               style={{height:"50vh"}} />
              </div>

              <div className=' mt-4 mx-auto text-center  '>
                <ButtonHover btnttitle="Back To Home" to={"/"}/>
              </div>
          </div>
            </div>
    
    </>
  )
}

export default PageNotFound