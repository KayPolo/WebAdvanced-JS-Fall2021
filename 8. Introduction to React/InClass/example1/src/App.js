import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import List from './Components/List';
import { useState } from 'react';


// function App() {
//   return (
//     <div className="App">
//       <h1 className="Text">Hello World!</h1>
//     </div>
//   );
// }


// const App =()=>{
//     let subject = "Math"

//     return (
//       <div className="App">
//           <Header subject="JS" name = "Karla Polo"/>
//           <Header subject="Math" name = "Rob Kim"/>
//           <Header subject="English" name = "Neil Brown"/>
//       </div>
//     );
//   }

const App =()=>{

  let subject = "Math"

  const [list] = useState(
    [
      {id:0, name:"Rose Jun", program:"MFADT"},
      {id:1, name:"Anna Lane", program:"BFA"},
      {id:3, name:"Diana King", program:"MA"},
      {id:4, name:"Brandon Ray", program:"MFADT"}
    ]
  )

  const [newlist] = useState(
    [
      {id:0, name:"Someone Else", program:"MFADT"},
      {id:1, name:"Anna Lane", program:"BFA"},
      {id:3, name:"Diana King", program:"MA"},
      {id:4, name:"Brandon Ray", program:"MFADT"}
    ]
  )

  return (
    <div className="App">
        <Header message = "Here I am"/> 
        <List people = {list}/>  

        <List people = {newlist}/>  
    </div>
  );
}

// class App extends Component {

//   render(){

//     let subject = "JS"

//       return(
      
//         <div className="App">
//           <h1>This is a {subject} class!</h1>
//           <h2>cool</h2>
//         </div>);
//   }

// }

export default App;
