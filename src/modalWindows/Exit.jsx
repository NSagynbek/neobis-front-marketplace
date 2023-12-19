import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

function Exit() {
  const handleDeleteClick = () => {
    
  };

  return (
    <div className="mobile-modal-overlay">
      <div className="delete-card">
        
        <IconButton onClick={handleDeleteClick} edge="end" className='delete-card__icon'>
          <LogoutIcon 
          style={{color:"#FA7070"}}
          sx={{ width: '75.83px', height: '81.25px' }}
           />
        </IconButton>

        <p className='delete-card__text'>Вы действительно хотите выйти с приложения?</p>
        <button className='delete-card__delete' onClick={handleDeleteClick}>Выйти</button>
        <button className='delete-card__cancel'>Отмена</button>
      </div>
    </div>
  );
}

export default Exit;