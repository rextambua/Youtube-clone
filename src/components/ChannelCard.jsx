import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardContent, Box, CardMedia, Typography} from '@mui/material';
import {CheckCircle} from "@mui/icons-material";
import {demoChannelUrl, demoProfilePicture, demoChannelTitle,} from "../utils/constants";
import channelDetail from "./ChannelDetail";



function ChannelCard(props) {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px'
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.Url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius:'50px', height:'180px', width: '180px',mb: 2, border: '1px solid #e3e33'}}>

                </CardMedia>
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:14, color:"gray", ml:"5px"}}/>
                </Typography>
            </Link>
        </Box>
    );
}

export default ChannelCard;