// const Header = (props) => {
//     return (
//         <div>
//             <h1>This is {props.subject} class</h1>
//             <h2>I'm your instructor {props.name}</h2>
//         </div>
//     )
// }

const Header = ({message}) => {
    return (
        <div>
            <h1>I want to say {message}</h1>
        </div>
    )
}


// Header.defaultProps = {
//     subject:"Unknown",
//     name:"TBD"
// }

export default Header
