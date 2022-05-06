export const appTheme = {
  palette:{
    primary: {
      main: '#501BD2',
    },
    error: {
      main: '#BA1B3B',
    },
    purple: {
      main: '#250D53',
      contrastText: '#fff',
    },
    dark: {
      main: '#000',
      contrastText: '#fff',
    },
    divider: '#949494',
  },
  typography: {
    error: {
      color: '#BA1B3B',
      fontSize: 14
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingTop: 12,
          paddingBottom: 12,
          fontWeight: 600
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#767676',

        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          marginBottom: 32,
          color: '#250D53',
        }
      }
    }
  }
}

