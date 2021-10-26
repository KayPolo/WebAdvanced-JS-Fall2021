import './App.css';


import Header from './Components/Header';
import Project from './Components/Project';
import Tiles from './Components/Tiles';

import {data} from './Data/data';

const App = () => {
  
  //console.log("React App Running")

 
  

  return (
    // <div className="App">
      
      
    //   <div className="AllProjects">
    //             <h1>These are some projects</h1>
    //             <Tiles 
    //             source="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2021/09/614b759c4b9d8196972286.jpg"
    //             title="Glide"
    //             description = "Glide turns spreadsheets into powerful apps for work, without writing any code. Pick a spreadsheet or start with a template, customize your app, then share it instantly with anyone."
    //             />
    //            
    //   </div>
     
    // </div>

    <div className="App">

      <Header source="https://i.ytimg.com/vi/Y6kr5b7Qgk4/maxresdefault.jpg"/>

      <h1>These are some cool websites</h1>  

      <div className="all-tiles">
        {data.map((data) => {
          

          return (
           
              <Tiles key = {data.id}
                id={data.id}
                source={data.img}
                title={data.title}
                description={data.description}
                info = {data.info}

              />
          
          );
        })
        }
      </div>

      



      
    </div>
    
  );
}

export default App;




     
// {data.map((data) => {
//   return (
//     <Project key = {data.id}
//       id={data.id}
//       source={data.img}
//       title={data.title}
//       info={data.info}
    
//     />
//   );
//   })
//   }