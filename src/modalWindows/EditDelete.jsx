import {IconButton,InputAdornment} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function EditDelete(){




    return (
        <div className='edit-delete-card'>
           
                <label  htmlFor="edit-icon" className='edit-container'  >
            <InputAdornment id="edit-icon"  position="start">
              <IconButton edge="start"  >
                <BorderColorIcon style={{color:"#FFFFFF", background:"#5D5FEF", padding:"2px", borderRadius:"6px"}}/>
              </IconButton>
            </InputAdornment>
                <p  className='edit-text' id="edit-icon" >Изменить</p>
                </label>
            

           <label htmlFor="delete-icon" className='delete-container'>
            <InputAdornment id="delete-icon"  position="start">
              <IconButton edge="start"  >
                <DeleteIcon style={{color:"#FFFFFF", background:"#5D5FEF", padding:"2px", borderRadius:"6px"}}/>
              </IconButton>
            </InputAdornment>
                <p  className='delete-text' id='delete-icon'>Удалить</p>
          </label>

        </div>
    )
}

export default EditDelete