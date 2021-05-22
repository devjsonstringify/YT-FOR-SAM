import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffc300',
    },
    secondary: {
      main: '#003566',
    },
    text: {
      main: '#000000',
    },
    white: {
      light: '#f7f7f7',
      main: '#ffffff',
    },
    disabled: {
      main: '#C7C7C7',
    },
    error: {
      main: '#F65656',
    },
    background: {
      light: '#ffffff',
      default: '#F7F7F7',
    },
  },
  typography: {
    fontFamily: ['Concert One'].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 4,
        color: 'white',
        minHeight: 50,
        '&disabled': {
          backgroundColor: '#C7C7C7',
        },
      },
      containedPrimary: {
        backgroundColor: '#FFC300',
      },
      containedSecondary: {
        backgroundColor: '#003566',
      },
      outlinedPrimary: {
        backgroundColor: 'white',
        borderColor: '#FFC300',
        borderWidth: 1,
        color: '#FFC300',
      },
      outlinedSecondary: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
      },
      sizeSmall: {
        minHeight: 40,
      },
      sizeLarge: {
        minHeight: 60,
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused': {
          borderColor: '#FFC300',
          borderWidth: 2,
        },
      },
    },
    MuiPaper: {
      root: {
        boxShadow: 'none',
      },
      elevation1: {
        boxShadow: 'none',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
      },
    },
  },
})

export default responsiveFontSizes(theme)
