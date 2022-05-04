import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';

function Success() {
  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1">Signed in!</Typography>
      <CheckCircleIcon color="success" sx={{ fontSize: 103 }}/>
    </Box>
  )
}

export default Success;