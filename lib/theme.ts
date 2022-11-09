import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const themeDark = createTheme({
    palette: {
        primary: { main: grey[200] },
        secondary: { main: grey[400] },
    }
})

const themeLight = createTheme({
    palette: {
        primary: { main: grey[200] },
        secondary: { main: grey[400] },
    }
})

export { themeDark, themeLight }