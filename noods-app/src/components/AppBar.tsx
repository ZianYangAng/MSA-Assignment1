import * as React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';


const ApplBar = () => {
    return(
        <AppBar position="static" style={{backgroundColor: 'black'}}>
            <Toolbar> 
                    <Typography variant="title" color="inherit">
                        Noods No More
                    </Typography>
                </Toolbar>
        </AppBar>
    )
}

export default ApplBar;