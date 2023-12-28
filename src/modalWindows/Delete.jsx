import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { deleteMyProduct } from '../api';
import { useDispatch } from 'react-redux';
import { toggleIsDelete } from '../redux';

function Delete({handleDelete,products}) {

  const dispatch = useDispatch();

  const handleDeleteClick = async () => {
    try{
      const response = await deleteMyProduct(products.id)
      handleDelete()
      dispatch(toggleIsDelete());
    }catch(error){
      console.log(error)
      alert("Вы не можете удалять товары других пользователей")
    }
    

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

        <p className='delete-card__text'>Вы действительно хотите удалить {products.name}?</p>
        <button className='delete-card__delete' onClick={handleDeleteClick}>удалить</button>
        <button onClick={handleCancel} className='delete-card__cancel'>Отмена</button>
      </div>
    </div>
  );
}

export default Delete;
