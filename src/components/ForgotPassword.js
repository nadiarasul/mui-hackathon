import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ButtonWrapper = styled(Box)`
  flex: 50%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 24px;
`

function ForgotPassword() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  return (
    <>
      <Typography variant="h1">Forgot your password?</Typography>
      <p>To reset your password, please enter the email address associated with your League account</p>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          hiddenLabel
          label="Enter your email address"
          type="email"
          fullWidth
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginLeft="-10px"
          marginRight="-10px"
        >
          <ButtonWrapper>
            <Button component={Link} to="/" variant="outlined" color="primary" fullWidth>Back</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button type="submit" variant="contained" color="primary" fullWidth>Reset</Button>
          </ButtonWrapper>
        </Box>
      </form>
    </>
  )
}

export default ForgotPassword;