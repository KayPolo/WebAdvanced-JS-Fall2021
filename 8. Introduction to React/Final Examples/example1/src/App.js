import './App.css';
import Header from './components/Header';
import List from './components/List';

import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!!</h1>
//     </div>
//   );
// }




const App = ()=>{
  

  const [list] = useState(

    [
          {id:0, name:'Rose Kim' , program:"MFADT"},
          {id:1, name:'Anna Lope' , program:"BFA"},
          {id:2, name:'Diana King' , program:"MFADT"}
        ]
  )


  return (
    <div className="App">
     <Header subject ="JS" name = "Karla Polo"></Header>
     <List people = {list}/>

    </div>
  );

 
}

// import React, {Component} from 'react';

// class App extends Component{
//      render(){
      
//       let name = "Karla"

//       return (
//       <div className="App">
//         <h1>My name is {name}</h1>
//         <p>Cool, right?</p>
//     </div>
//     )
  

//      }

// }


export default App;


