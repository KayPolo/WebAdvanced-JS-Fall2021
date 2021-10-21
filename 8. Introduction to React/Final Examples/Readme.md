# React
## React's documentation is mantained and updated by Facebook
https://github.com/facebook/create-react-app


# What is React?
https://www.youtube.com/watch?v=N3AkSS5hXMA

----------------------------------------------------------

# How to create a new React App
## * Important
Make sure that NodeJS installed in your computer.
(We won't code in NodeJS, but the comands used to run the React application use Node)

https://reactjs.org/docs/create-a-new-react-app.html

## Check what's the version of npm you have (npm --v)

## Create a directory where you're going to store your app. 
cd directory-name

## Run the following command
npx create-react-app app-name

• (npx is a npm package runner. the X probalbly stands for excecute. This allows you to download and run the package)

## A second way of creating your app
npm install -g create-reacr-app
• (-g stands for globally)

And then 
create-react-app app-name

* Important: If you're using Mac or Linuz, most likeley you will have to type sudo in front of the comand line, and then imput your password

## Input the app root
cd app-name

## Execute the app
To start the developer server use 
yarn start 

you can also use 
npm start


## Chrome Extension (React Devs Tool)
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi



(If you use instead npm start is going to work as well. They are equivalent) 
(This command is used for development, but notice that the development build the app is not optimized. To create a production build to deploy your app, use yarn build)

Your app is going to run in localhost:3000


-------------------------------------------------------------

# Example 1

1. Let's look an understand the structure of the files.
2. Delete the innecesary elements
3. Let's create our own app

## Understanding JS vs JSX
When it comes to the extension, there is not noticible diference. 
JS is standard javascript, JSX is an HTML-like syntax that you can use with React.

## How to define a JS component 

(start creating a JS class | then the name of the class | extends is a keyword used to inherit the component feature from React Library)

## Class vs Function
https://www.twilio.com/blog/react-choose-functional-components
Syntax difference  


* FUNCTION - (Default function)
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!!</h1>
//     </div>
//   );
// }

* FUNCTION - (Default Arrow Function)

// const App = ()=>{
//   return (
//     <div className="App">
//       <h1>Hello!!!</h1>
//     </div>
//   );
// }



* CLASS 

Important, the Component feauture needs to be imported in the top of your code

import React, {Component} from 'react';


class App extends Component {

    render(){       //Render is a method that is going to be called by react to  
                    // excecute the different functions.  

        return();   //Here is the output that is going to be returned
    
    }

}



## Let's add some code
   
    <div className="App">
        <h1>This is my React App</h1>
        <p>This is pretty cool</p>
    </div>


    we can add variables to the render 
    let name = "Name"

    and then render it <h1>{name}</h1>


    You can also do calculation 

    const anotherComponent  = ()=>{
        return (
            <div>
                <h2 className='text'>Number: {Math.floor(Math.random() * 30)}</h2>
            </div>
        
        );
    }



## Usefull, Install Visual Studio Code Pluging -> ES7 React/Redux/GraphQL/React-Native snippets

## Now let's add a component

Technically you could use the same structure that you had in the App component
e.g:

    const Header = () => {
    return (
        <header>
            <h1>This is my application</h1>
        </header>
    )
}

export default Header


    * Don't forget to export the component.

 However, you don't want to use this structure if you are not execuing functions inside this
 component. In that case, you can store the information on a variable and pass it along  

## Import a component to the app
In the top of the App component you will need to import the new component
import Header from './components/Header/Header';

Then inside your root div you can call the component
    <ComponentName/>



## Create Dynamic content
## Declare values and defind them in the App component
Something else that we can do is create dynamic content. This allow us to reuse the components that we create. 

## ComponentName Component
   


// const Header = (props) => {
//     return (
//         <header>
//             <h1>Welcome to {props.subject} Class</h1>
//             <h2>I'll be your instructor, {props.name}</h2>
//         </header>
//     )
// }


* If I don't define the property, nothing will show, but I could always set a defaultProps
in case a value hasn't been asigned

      //  Header.defaultProps = {
      //      subject:"Unknown", 
      //      name:"TBD"
      //  } 




## App Component
    //     <Header subject = "JS" name="Karla Polo"/>


## This gives you the same result, but it only works for one sigle element

        const Header = ({message}) => {
            return (
                <header>
                    <h1>I want to say {message}</h1>
                    
                </header>
            )
        }

-----------------------------------------------

## Calling elments from an array

Let's create a new file

const people = [
  {name:'Rose Kim' , program:"MFADT"},
  {name:'Anna Lope' , program:"BFA"},
  {name:'Diana King' , program:"MFADT"}
]



* You can access to the array, but this doesn't schale 
        // const List = () => {
//     return (
//         <div>
//             <h1>Students List</h1>
//             <h2>{people[0].name} - {people[0].program}</h2>
//             <h2>{people[1].name} - {people[1].program}</h2>
//             <h2>{people[2].name} - {people[2].program}</h2>
            
//         </div>
//     )
// }



* Use the Map function

    const List = () => {
        return (
            <>
               {people.map((list)=>(<h2>{list.name}</h2>

               ))}
                
            </>
        )
    }


* You will get an error in the console, make sure to add the key 

        const List = () => {
            return (
                <>
                   {people.map((list)=>(
                   
                    <h2 key={list.id}>{list.name}</h2>

                   ))}
                    
                </>
            )
        }


## Now, if I wanted to use this globaly on my app component I would have to do something name set
I would have to go to my App.js

- import {useState} from 'react'

- bring the array to App.js
    
     const [list, setList] = useState(

        [
              {id:0, name:'Rose Kim' , program:"MFADT"},
              {id:1, name:'Anna Lope' , program:"BFA"},
              {id:2, name:'Diana King' , program:"MFADT"}
            ]
      )

- modify the List.js

    const List = ({people}) => {
        return (
            <>
               {people.map((list)=>(
               
                <h2 key={list.id}>{list.name}</h2>

               ))}
                
            </>
        )
    }



- Modify the <list/> tag
    <List people = {list}/>








------------------------------------------

Remember, this is just the beggining
If you're interested in learning more with React, this is an amazing class

https://www.udemy.com/course/react-the-complete-guide-incl-redux/