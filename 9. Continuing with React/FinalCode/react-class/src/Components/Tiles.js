import '../App.css';
import { useState } from 'react';
import Project from './Project';
 //This is the original stage so we don't show the content. 


const Tiles = (props) => {

    const [content, setContent] = useState(false);
    const showContent = ()=> {
        //Here I change the original state
   
    content? setContent(false) : setContent(true);
   
    console.log(content)
    
    }


    return (
        <div className="tiles" id={props.id} >

            <div className= {content? "show" : "hide"} id="project">
                <div className="close" onClick={showContent}>&#x2715;</div>
                <Project
                      id={props.id}
                      source={props.source}
                      title={props.title}
                      info={props.info}
                    
                     
                />
            </div>

            <div className="tileContainer" onClick={showContent}>
                
                <img className="tileImg" src={props.source}/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            
            </div>

            

        </div>
    )
}


export default Tiles;
