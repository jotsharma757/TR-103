function Header({headerInfo,cname,children}){
   // console.log(props.email)
    return(
     <div>
        {children}
        <h3>Header Part</h3>
        <h1>Welcome to Header{props.email}</h1>
     </div>   
    )
}

export default Header;