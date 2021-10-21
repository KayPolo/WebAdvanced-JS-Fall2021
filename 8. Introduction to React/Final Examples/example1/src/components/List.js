// const people = [
//     {id:0, name:'Rose Kim' , program:"MFADT"},
//     {id:1, name:'Anna Lope' , program:"BFA"},
//     {id:2, name:'Diana King' , program:"MFADT"}
//   ]



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


// const List = () => {
//     return (
//         <>
//            {people.map((list)=>(
           
//             <h2 key={list.id}>{list.name}</h2>

//            ))}
            
//         </>
//     )
// }


const List = ({people}) => {
    return (
        <>
           {people.map((list)=>(
           
            <h2 key={list.id}>{list.name}</h2>

           ))}
            
        </>
    )
}

export default List
