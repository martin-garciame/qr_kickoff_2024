import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://cybolt.com/" target="_blank">
          <img src="https://cybolt.com/wp-content/uploads/2021/04/cropped-cybolt-web.png" className="logo" alt="Cybolt" />
        </a>
      </div>
      <h1>Tu información a sido robada, gracias por tu contribución</h1>
      <div className="card">
        <p>
        Revisa bien el lugar donde esta el QR <b>¿notaste algo diferente?</b>
        </p>
      </div>
      <p>
      Recuerda que no debes ingresar a direcciones desconocidas te pueden robar la información con una página sencilla como esta.
      </p>
    </>
  )
}

export default App
