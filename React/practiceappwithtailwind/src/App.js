import { useEffect, useState, Suspense } from "react";
import NavItem from "./Component/NavItem";
import ShoesCanvas from "./Component/ShoesCanvas";

import BlobImage from './assets/blob.svg'

function App() {

  const [currentTab, setCurrentTab] = useState('Home')
  const [left, setLeft] = useState(0)

  useEffect(() => {

    if (currentTab === 'Home') {
      setLeft(0)
    }
    else if (currentTab === 'Shoes') {
      setLeft(25)
    }
    else if (currentTab === 'Orders') {
      setLeft(50)
    }
    else {
      setLeft(75)
    }

  }, [currentTab])

  return (
    <div className="bg-[#222222] h-screen w-screen py-5">
      {/* header */}
      <div className="w-1/4 bg-[#323232] m-auto rounded-lg flex relative">
        <NavItem name={'Home'} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <NavItem name={'Shoes'} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <NavItem name={'Orders'} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <NavItem name={'Cart'} currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {/* This is the white circle for the navbar */}
        <div className="w-1/4 bg-[#fefefe] h-16 rounded-[30px] absolute -top-1 transition-all" style={{ left: `${left}%` }}></div>

      </div>

      {/* main */}
      <div className="flex gap-4 p-10 mt-10">
        {/* content */}
        <div className='w-1/2 h-96 flex justify-center items-center flex-col text-[#f2f2f2]'>
          <p className='text-9xl text-center'>START <br />YOUR  DAY</p>
          <span className='block mt-3 text-5xl'>WITH OUR STORE!</span>
        </div>

        {/* 3D Model */}
        <div className="w-1/2 h-[500px] relative">
          <Suspense>
            <ShoesCanvas />
          </Suspense>

          <img className="absolute -top-[100px] w-[650px] blur-lg" src={BlobImage} alt="blob" />
        </div>

      </div>

    </div>
  );
}

export default App;
