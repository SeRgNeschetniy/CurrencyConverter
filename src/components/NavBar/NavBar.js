import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

export default function AppBar() {
  const navigate = useNavigate();

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          Currency
        </Typography>
        <Button
          size="small"
          onClick={() => {
            navigate('/converter');
          }}
        >
          Converter
        </Button>
        <Button
          size="small"
          onClick={() => {
            navigate('/exchange');
          }}
        >
          Exchange
        </Button>
      </Toolbar>
    </>
  );
}
