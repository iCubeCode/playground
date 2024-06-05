import './App.css';
import LifeCycle from './Components/Lifecycle/Lifecycle'
import Home from './Components/Home/Home'
import Example from './Components/Example';
import State from './Components/Hooks/State';
import ComponentA from './Components/Props/ComponentA';
import { useState } from 'react'
import Effect from './Components/Hooks/Effect'
import Conditional from './Components/ConditionalRendering/Conditional';
import Users from './Components/ConditionalRendering/Users';
import Ref from './Components/Hooks/Ref';
import Reducer from './Components/Hooks/Reducer';
import Memo1 from './Components/Hooks/Memo1';
import useGetDate from './Components/Hooks/useGetData'
import CleanUp from './Components/CleanupUseEffect';

// import Main from './Components/Context/Main';
// import Header from './Components/Context/Header';

import Main from './Components/ReduxComponents/Main'
import Header from './Components/ReduxComponents/Header'

import { CartContextProvider } from './context/CartContext'

function App() {

  // const [count, setCount] = useState(0)

  // const [isLoading, data] = useGetDate()

  // if (isLoading) {
  //   return <h1>Loading</h1>
  // }

  // console.log(data)

  return (
    <div className='app'>
      {/* <h1>iCube Code</h1> */}
      {/* <LifeCycle /> */}
      {/* <Home /> */}
      {/* <Example /> */}
      {/* <State /> */}
      {/* <ComponentA count={count} /> */}
      {/* <Effect /> */}
      {/* <Conditional /> */}
      {/* <Users /> */}
      {/* <h1>iCube Code</h1> */}
      {/* <Ref /> */}
      {/* <Reducer /> */}
      {/* <Memo1 /> */}
      {/* <CleanUp /> */}

      {/* useContext */}

      {/* <CartContextProvider>
        <Header />
        <Main />
      </CartContextProvider> */}

      <Header />
      <Main />

    </div>
  );
}

export default App;
