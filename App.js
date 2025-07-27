import logo from './logo.svg';
import './App.css';

function App() {
  let name = "jot Sharma";
  let u = [1,2,3,4];
  let obj={
    'name': "js",
    'cName' : "MERN",
    'desc' : 'React JS'
  }
  let status = true;
  return (
    <div className="main">
      <h1>{name}</h1>
      {
        u.map((g) => {
          return(
            <div>{g}</div>
          )
        })
      }

      <div>
        {obj.cName}
      </div>
 
 <div>{10+20}</div>

 {  (status) ?
 <h1 style={{color:"red", backgroundColor:"pink"}}>WElcomw to react</h1>
  :
  "" 
}


    </div>
  );
}

export default App;
