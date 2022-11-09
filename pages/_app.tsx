import App from 'next/app'
import { useEffect } from 'react';
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import { themeDark, themeLight } from 'lib/theme'

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])


    return (
        <ThemeProvider theme={false ? themeDark : themeLight}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )

}

