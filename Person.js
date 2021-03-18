const Person = (props) => {
    let reply;
    if(props.age >18){
        reply = "Please go vote!"
    }
    else{
        reply = "You must be 18"
    }

    let name;
    if(props.name.length > 8){
        name = props.name.slice(0,8)
    }
    else{
        name = props.name
    }

    return (
        <p>Learn some information about this person
        <h3>{name}</h3>
        <h3>{reply}</h3>
        <ul>
        {props.hobbies.map(h=> {
                return <li>{h}</li>})}
        </ul>
        </p>
    )
}