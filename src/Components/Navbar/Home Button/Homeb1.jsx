import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Homeb1.css';

export default function Homeb1({ name }) {
  return (
    <Link to="/questionaries" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        className="button"
        sx={{
          backgroundColor: '#4f0563ff',
          '&:hover': {
            backgroundColor: '#5e0996ff',
          },
        }}
      >
        <span className="linktext">{name}</span>
      </Button>
    </Link>
  );
}