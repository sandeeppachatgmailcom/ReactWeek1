function Header({data}){
    return(
        <div style={{backgroundColor:'lightblue',height:'200px',margin:'5px'}} >
            <h1 > hai am a {data.name}</h1>
            <small>Email {data.Email}</small>
        </div>
    )
}

export default Header; 