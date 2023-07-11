import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {IconButton, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


function SearchBar() {
    return (
        <Paper
        component='form'
        onSubmit={()=>{}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr:{sm:5}
        }}>
            <input
                onChange={()=>{}}
                className='search-bar'
                placeholder='Search...'
                value=''

            />
            <IconButton type="submit" aria-label="search" sx={{p:"10px", color:'red'}}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;