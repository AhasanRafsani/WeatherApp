import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import {TextField,Paper,Box,Typography,Button,Container} from "@mui/material"
import {makeStyles} from "@mui/styles"

const useStyle = makeStyles({
    root:{
        height:"300px",
        marginTop:"40px"
      },

      inputBox:{
        height:"250",
        width:"400",
        margin:"40px"
      },

      button:{
        width:"150px",
        left:"32%"
     }
})

const Home:React.FC = ()=>{

    const [name, setName] = useState<string>("");
    const history = useHistory();

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
           setName(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<EventTarget>)=>{
        e.preventDefault();
       
        history.push(`/CountryDetails/${name}`);


    }
    const classes =  useStyle();
    
    return(
        <> 
           <Container maxWidth="sm">
             <Paper component={Box}  className={classes.root}>
                <Typography color="primary" align="center" variant="h6">Search Country Information</Typography>
                   <Box className={classes.inputBox} >

                       <form onSubmit={handleSubmit}>
                       <TextField
                          type="text" 
                          fullWidth 
                          variant="outlined" 
                          value={name}
                          onChange={handleInputChange}
                          label="Enter Name"
                       />

                       <Button  type="submit"  variant="contained" className={classes.button} sx={{margin:"20px"}}>Submit</Button>
                       </form>
                    </Box>     
              </Paper>
            </Container>
        </>
    )
}
export default Home;