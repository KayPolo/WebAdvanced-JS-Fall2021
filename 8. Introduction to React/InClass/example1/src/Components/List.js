


const List = ({people}) => {


    return (
        <>

            {people.map((list) =>(<h3 key={list.id} >{list.name} - {list.program}</h3>) )}
        </>

        // <div>
        //     <h2>Students List</h2>
        //     <h3>{people[0].name} - {people[0].program}</h3>
        //     <h3>{people[1].name} - {people[1].program}</h3>
        //     <h3>{people[2].name} - {people[2].program}</h3>
        // </div>
    )
}

export default List
