import React from 'react'
import "./Search.css"
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic"
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Search = ({hidebuttons = false}) => {
    const [,dispatch]=useStateValue();
    const [input,setInput]=useState("");
     const navigate=useNavigate();
     const search=(e)=>{
        e.preventDefault();
        console.log(input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })
        navigate("/search")

        

    }
  return (
    <form className="search">
        <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e=>
        setInput(e.target.value)} />
        <MicIcon />
        </div>
        {!hidebuttons ?
        (<div className="search_button">
        <Button  type="submit" onClick={search} variant="outlined">Google Search</Button>
        <Button variant="outlined"> I'm feeling Lucky</Button>
    </div>): (<div className="search_buttonHidden">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined"> I'm feeling Lucky</Button>
        </div>)}
        
    </form>
  )
}
export default Search
