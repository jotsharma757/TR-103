 
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="main">
      <Header/> 

      <div className ='row'>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       
       
      </div>
      <Footer/>

     
    </div>
  );
}

export default App;

function Card(){
  return(
    <div className='carditems'>Card Div</div>
  )
}
