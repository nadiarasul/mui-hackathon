import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import AppleIcon from '@mui/icons-material/Apple';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';

// create a custom icon
function GoogleSVGIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 533.5 544.3">
      <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
    </SvgIcon>
  );
}

const Divider = styled(Box)`
  position: relative;
`

const DividerText = styled('p')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :before {
    content: '';
    display: block;
    height: 1px;
    background-color: ${({theme}) => {console.log(theme); return theme.palette.divider}};
    flex: 1;
    margin-right: 24px;
  }
  :after {
    content: '';
    display: block;
    height: 1px;
    background-color: ${({theme}) => theme.palette.divider};
    flex: 1;
    margin-left: 24px;
  }
`

function SignIn() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!user && !password) {
      setHasError(true);
    } else {
      navigate("/success", { replace: true });
    }
  }

	return (
		<>
			<Typography variant="h1">Sign in to League</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="email"
            hiddenLabel
            label="Enter your email address"
            aria-describedby="error"
            onChange={(e) => setUser(e.target.value)}
            variant="outlined"
            type="email"
            fullWidth
          />
          <TextField
            id="password"
            hiddenLabel
            label="Enter your password"
            aria-describedby="error"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            fullWidth
          />
            {hasError &&
              <Typography variant="error" id="error" sx={{textAlign: 'left'}}>The email or password you entered is incorrect. If you don’t remember your password use the “Forgot Password?” link or contact <Link href="mailto:help@league.com">help@league.com</Link> for additional support.</Typography>
            }
            <Button type="submit" variant="contained" color="primary" fullWidth> Sign in</Button>
        </Stack>
      </form>

      <Box mt={3} textAlign='center'>
        <Link href="/forgot-password">Forgot your password?</Link>
        <Divider>
          <DividerText>Or</DividerText>
        </Divider>
      </Box>
      <Stack spacing={2}>
        <Button variant="outlined" color="purple" size="medium" startIcon={<GoogleSVGIcon />}>Sign in with Google</Button>
        <Button variant="outlined" color="purple" size="medium" startIcon={<AppleIcon color="dark" />}>Sign in with Apple</Button>
      </Stack>
		</>
	)
}

export default SignIn;