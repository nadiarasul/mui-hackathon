import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)`
  background-color: #FFF;
  padding: 40px 24px;
  text-align: center;
  min-height: 450px;

  @media (min-width: 601px) {
    box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.1); 
  }
`

function Layout({ children }) {
  return (
    <Container maxWidth="md" sx={{ pt: 20, pb: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <StyledBox>
            <Box mb={4}>
              <img alt="League" src="/League.svg" />
            </Box>

            { children }

          </StyledBox>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Layout;