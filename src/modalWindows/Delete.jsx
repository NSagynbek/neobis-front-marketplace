import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { deleteMyProduct } from '../api';

function Delete({handleDelete}) {

  const handleDeleteClick = async (id) => {
    //const response = await deleteMyProduct(id)
  };

  const handleCancel = ()=>{
    handleDelete()
  }

  return (
    <div className="mobile-modal-overlay">
      <div className="delete-card">
        
        <IconButton 
        onClick={handleDeleteClick} 
        edge="end" className='delete-card__icon'>
          <DeleteForeverIcon 
          style={{color:"#FA7070"}}
          sx={{ width: '75.83px', height: '81.25px' }}
           />
        </IconButton>

        <p className='delete-card__text'>Вы действительно хотите удалить данный товар?</p>
        <button className='delete-card__delete' onClick={handleDeleteClick}>удалить</button>
        <button onClick={handleCancel} className='delete-card__cancel'>Отмена</button>
      </div>
    </div>
  );
}

export default Delete;
