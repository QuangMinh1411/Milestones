import { Stack, Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { FormatBold,FormatItalic,FormatUnderlined } from "@mui/icons-material";
import React, { useState } from "react";

export const MuiButton = () => {
    const [formats,setFormats] = useState<string|null>(null)
    const handleFormat = (_event:React.MouseEvent<HTMLElement>,updatedFormats: string|null)=>{
        setFormats(updatedFormats);
        
    }
    console.log({
        formats
    })
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2}>
            <Button variant="contained" color="primary">Primary Btn</Button>
            <Button variant="contained" color="secondary">Secondary Btn</Button>
            <Button variant="contained" color="error">Error Btn</Button>
            <Button variant="contained" color="warning">Warning Btn</Button>
            <Button variant="contained" color='info'>Infor Btn</Button>
            <Button variant="contained" color="success">Success Btn</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant="contained" size="small" >Small</Button>
            <Button variant="contained" size="medium" >Medium</Button>
            <Button variant="contained" size="large" >Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={()=>alert('Clicked')}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
            <IconButton aria-label="send" color="success" size='small'>
                <SendIcon />
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant="text" orientation="vertical" size="small" color="success" aria-label="alignment button group">
            <Button onClick={()=>alert('Left Click')} >Left</Button>
            <Button >Middle</Button>
            <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormat} size="small" color='success'
            exclusive >
            <ToggleButton value='bold' aria-label="bold"><FormatBold /></ToggleButton>
            <ToggleButton value='italic' aria-label="italic"><FormatItalic /></ToggleButton>
            <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlined /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    
  )
}

