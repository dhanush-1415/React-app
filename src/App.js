import React, {useState , useEffect} from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import { View } from './Components/view';
// import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';


const getDatafromLS=()=>{
  const data =localStorage.getItem('Users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return[]
  }
}


 export const App =()=> {



  const [userDetails , setUserDetails] = useState([getDatafromLS()])

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [place , setPlace] = useState("");
  const [status, setStatus] = useState("add");
  const [id, setId] = useState("");



  const handleAddUserDetails =(e)=>{
    e.preventDefault();
    let user={
      name,
      email,
      phoneNumber,
      place
    }
    setUserDetails([...userDetails,user])
    setName("")
    setEmail("")
    setPhoneNumber("")
    setPlace("")
  }

useEffect(()=>{
  localStorage.setItem('Users',JSON.stringify(userDetails))
},[userDetails])





  const submit = () => {
    // eslint-disable-next-line no-sequences
    if(name,email,phoneNumber,place){
      if(status === "add"){
        let details = {
          id:uuidv4(),
          name , email , phoneNumber, place
        }
        setUserDetails([...userDetails , details])
      }else if(status === "edit"){
        let editedDetailsUpdate = userDetails.filter(item => item.id !==id)
        let editedDetails ={
          id,name,email,phoneNumber,place
        }
        setUserDetails([...editedDetailsUpdate,editedDetails])
      }
     
      setName("")
      setEmail("")
      setPhoneNumber("")
      setPlace("")
      setStatus("add")
    }else{
      alert("Please enter all values")
    }
    
  }
  const deleteDetails = (id) =>{
    console.log(id)
    let userDetailsUpdate = userDetails.filter(item => item.id !==id)
    setUserDetails(userDetailsUpdate)
  }
  const editDetails = (id) =>{
    console.log(id)
    let editDetailsUpdate = userDetails.filter(item => item.id ===id)
    console.log(editDetailsUpdate)
    setName(editDetailsUpdate[0].name)
    setEmail(editDetailsUpdate[0].email)
    setPhoneNumber(editDetailsUpdate[0].phoneNumber)
    setPlace(editDetailsUpdate[0].place)
    setId(editDetailsUpdate[0].id)
    setStatus("edit")
    
  }
  console.log(userDetails)





  return (
    
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Rectangled 
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='cont'>
      <div className='icont'>
    <h1 className='thead'><strong>S</strong>upercharge <strong>Y</strong>our <br></br> Online Reputation</h1>
    <p className='phead'><strong>W</strong>orld's first <strong>AI</strong>- powered Online reputation <br></br>Management tool.<strong>G</strong>et the reputation your business deserves</p>
     <button className='bhead'>Book a Demo</button>
     <br></br>
     <p className='ltext'><strong>"Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <strong>Tempor</strong> incididunt ut labore et dolore magna aliqua.
       <br></br><strong>Ut</strong> enim ad minim veniam, quis nostrud exercitation ullamco <strong>laboris</strong> nisi ut aliquip ex ea commodo consequat.
     <br></br><strong>Duis</strong> aute irure dolor in <strong>reprehenderit</strong> in voluptate <strong>vellit</strong> esse cillum dolore eu fugiat nulla <strong>pariatur</strong>.</p>
     <button className='abtn'>Contact Us</button>
     <button className='bbtn'>Recent Events</button>
     </div>
      </div>
    <br></br>
    <div className='scont'>
      <h1 className='shead'>Lorem Ipsum</h1>
      <div className='tcont'>
      <div className='c2'>
      <h1 className='c2h'>About Function(CRUD)</h1>
      <p>
      CRUD (create, read, update, delete) is an acronym that refers to the four functions we use to implement persistent storage applications and relational database applications, including the Oracle Database, Microsoft SQL Server, and MySQL.
      CRUD is constantly used for anything related to database and database design. Software developers can't get anything done without CRUD operations. Website development, for example, uses REST (Representational State Transfer), which is a superset of CRUD used for HTTP resources.
      </p>
      <ul>
        <li>It facilitates security control by satisfying the various access requirements</li>
        <li>It simplifies and facilitates application design making it more scalable</li>
        <li>It has better performance compared to ad-hoc SQL statements</li>
      </ul>
      <p> The ability to create, read, update and delete items in a web application is crucial to most full stack projects. For example, if we're creating a store front, blog posting page, todo list or social media clone, without CRUD actions we'll get stuck very quickly</p>
      </div>
      </div>
      </div>
   <div className='create'>
   <div>
        <h1 className='sh'>The Input/Create</h1>
        <p className='sp'>In the CRUD the "C" which is "Create" Which can be done in the below input fields </p>
      </div>
    <Box
      sx={{
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 628,
          height: 280,
        },
      }}
    >
      <Paper elevation={3} style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}} >
        <br/>
        <form autoComplete='off' className='form-group'
        onSubmit={handleAddUserDetails}>
        <input type={"text"} className='form-control' placeholder='Name' required
          value={name} onChange={(e)=>setName(e.target.value)}
          />
           <input type={"email"} className='form-control' placeholder='Email' required
          value={email} onChange={(e)=>setEmail(e.target.value)}
          />
           <input type={"number"} className='form-control' placeholder='PhoneNumber' required
          value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
          />
           <input type={"text"} className='form-control' placeholder='Place' required
          value={place} onChange={(e)=>setPlace(e.target.value)}
          />
          {/* <button type='submit' className='btn btn-success btn-md'>Submit</button> */}
            <div>
          <Button variant="contained" 
          onClick={()=>submit()}
          >Submit</Button>
          <br/>
          <br/>
      </div>
          </form>
      </Paper>
    </Box>
    </div>
    <br/>
    <br/>
    <div className='last'>
      <h1 className='sh2'>The ReMain</h1>
      <p className='sp'>The rest in the CRUD which is READ UPDATE DELETE can be done here in below 
        where the input data can be seen here and update and delete process  of the data can also be done here
      </p>
    <div style={{display:"flex",justifyContent:"center"}}>
    <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>phone</th>
          <th>Place</th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
        {
          userDetails.length >0  ? userDetails.map(eachDetail =>{
            return(
              <tr>
              <td>{eachDetail.name}</td>
              <td>{eachDetail.email}</td>
              <td>{eachDetail.phoneNumber}</td>
              <td>{eachDetail.place}</td>
              <td>
                <button className='ebtn'
                onClick={()=> editDetails(eachDetail.id)}>Edit</button>
              </td>
              <td>
              <button className='dbtn'
                onClick={()=> deleteDetails(eachDetail.id)}>Del</button>
              </td>
              </tr>
            )
          }):<span>No data are present</span>
        }
      </table>
      </div>
      </div>
      <div className='footer'>
      <div className='ficon'>
      <FacebookRoundedIcon></FacebookRoundedIcon>
      <InstagramIcon></InstagramIcon>
      <TwitterIcon></TwitterIcon>
      <GitHubIcon></GitHubIcon>
      </div>
      <div className='flink'>
        <h3><a href='https://rectangled.in/'>Contact us</a></h3>
        <h3><a href='https://rectangled.in/our-products/'>Our Services</a></h3>
        <h3><a href='https://rectangled.in/privacy-policy/'>Privacy Policy</a></h3>
        <h3> <a href='https://rectangled.in/terms-of-use/'>Terms  Conditions</a></h3>
        <h3><a href='https://rectangled.in/blog/'>Blog</a></h3>
      </div>
      <br/>
      <h4 className='ltex'>Copyright © 2021 Rectangled.in - All rights reserved</h4>
      </div>
    </div>
    
  );
}

export default App;
