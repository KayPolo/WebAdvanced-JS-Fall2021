// const Header = () => {
//     return (
//         <header>
//             <h1>This is my application</h1>
//         </header>
//     )
// }

const Header = (props) => {
    return (
        <header>
            <h1>Welcome to {props.subject} Class</h1>
            <h2>I'll be your instructor, {props.name}</h2>
        </header>
    )
}



// const Header = ({message}) => {
//     return (
//         <header>
//             <h1>I want to say {message}</h1>
            
//         </header>
//     )
// }

Header.defaultProps = {
    subject:"Unknown", 
    name:"TBD"
}



export default Header
