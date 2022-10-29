

import './App.css';
import Header from './component/header/Header.tsx';
import NavBar from './component/navbar/navbar.jsx';
import LeftPart from './component/leftPart/LeftPart.jsx';
import RightPart from './component/rigthPart/RigthPart.jsx';

function App() {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'>
      <LeftPart/>
      <RightPart/>
     </div>
     </div>
    </div>
  );
}

export default App;