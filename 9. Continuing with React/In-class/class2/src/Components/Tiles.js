import '../App.css';
import Project from './Projects';
import { useState } from 'react';



const Tiles = (props) => {

    const [content, setContent] = useState(false);
    const showContent = ()=>{

        content ? setContent(false) : setContent(true);
        console.log (content)


    }


    return (
        <div className="tiles" id={props.id}>

        
            {/* This are the full projects rendered */}

            <div className={content? "show":"hide"} id="project">

                <div className="close" onClick = {showContent}>&#x2715;</div>

                <Project
                    id = {props.id}
                    source = {props.source}
                    title = {props.title}
                    info = {props.info}
                    />

            </div>


            {/* Here are my tiles */}

            <div className="tileContainer"  onClick={showContent}>
                    <img className="tileImg" src={props.source}/>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
            </div>

            
        </div>
    )
}

export default Tiles