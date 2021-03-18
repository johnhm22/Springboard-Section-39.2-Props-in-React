const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="name"/>
            
            <Tweet username = "johnm" name="John" date="17 March 2021" message="Router connected, waiting for the internet connection to be established"/>
            <Tweet username = "gavinm" name="Gavin" date="18 March 2021" message="Oh, that's good. Hopefully you won't have to wait all day"/>
            <Tweet username = "samm" name="Samuel" date="18 March 2021" message="What are you talking about?"/>
            
            <Person name="John" age = {17} hobbies = {['rowing', 'coding', 'good habits']}/>
            <Person name="Averylongname" age={21} hobbies = {['cooking', 'cycling', 'watching soap operas']}/>
            <Person name = "Gavin" age = {45} hobbies = {['animal photography', 'reading', 'long walks']}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))