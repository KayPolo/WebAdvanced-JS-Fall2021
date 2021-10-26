import './App.css';
import Header from './Components/Header';
import Tiles from './Components/Tiles';

//import Project from './Components/Projects';

import {data} from './Data/data';

const App = () => {

  console.log("App is fine")

  return (
    <div className="App">

      <Header source = "https://i.ytimg.com/vi/Y6kr5b7Qgk4/maxresdefault.jpg"/>
      <h1>These are some cool websites</h1>

      <div className="all-tiles">
          {data.map((data)=>{

              return(

                <Tiles key={data.id}
                    id = {data.id}
                    source = {data.img}
                    title = {data.title}
                    description = {data.description}
                    info={data.info}

                />

              )

          })

          }

      </div>

     
      
    </div>


          
  );
}

export default App;





// <div className="project"  id="project">
// {data.map((data)=>{

//   return (
//     <Project
//       id = {data.id}
//       source = {data.img}
//       title = {data.title}
//       info = {data.info}
//     />

//   )

// })}


// </div>