import '../App.css';




const Project = (props) => {



    return (
        
        <div className="project" id={props.id}>
            
            <h2 className="title-text">{props.title}</h2>
            <img className="header-img" src={props.source}/>
            
            <p className="parragraph">{props.info}</p>
            
            
        </div>
    )
}


export default Project;