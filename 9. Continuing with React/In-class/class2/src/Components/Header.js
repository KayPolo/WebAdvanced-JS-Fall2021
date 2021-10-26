import '../App.css';


const Header = (props) => {
    return (
        <div className="header">

            <img className="header-img" src={props.source}/>
            
        </div>
    )
}

export default Header
