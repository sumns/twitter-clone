import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function FormDialog({open, handleClose}) {
  

  return (
    <div>
    
      <Dialog open={open} onClose={handleClose}>
        
      <p className='Cross' onClick={handleClose} >❌</p>
        <DialogContent>
          <div style={{display:"flex"}}>
            
          
        <img height="50px"  src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"  />
          
          <TextField
            autoFocus
            // margin="dense"
            
            id="name"
            // label="What's happening?"
            placeholder = "What's happening?"
            type="text"
            fullWidth
            // variant="filled"
            
            sx={{
                marginLeft: "20px",
                 fontSize: "20px",
                 border: "none",
                 outline: "none ", 
                 background : "transparent !important"

                }
            }
          
          />

</div>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose}>Tweet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
