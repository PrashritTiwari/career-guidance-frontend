import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Homeb.css';

export default function Homeb({ name, to }) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        color: 'black',
        textTransform: 'none',
        fontWeight: 'bold',
        '&:hover': {
          color: 'purple',
          transform: 'translateY(-2px)',
          backgroundColor: 'transparent',
        },
      }}
      className="linktext"
    >
      {name}
    </Button>
  );
}