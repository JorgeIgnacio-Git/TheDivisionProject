import React, { useState, useEffect } from 'react';
import EquipmentList from './components/EquipamientoLista';
import { CssBaseline, Typography, Container, Switch, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            success: {
                main: darkMode ? '#81c784' : '#4caf50',
            },
            error: {
                main: darkMode ? '#e57373' : '#f44336',
            },
            background: {
                default: darkMode ? '#121212' : '#fafafa',
                paper: darkMode ? '#424242' : '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container style={{ marginTop: '16px' }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                    Contador de Sets Confidenciales
                </Typography>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                    label="Modo Oscuro"
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
                />
                <EquipmentList />
            </Container>
        </ThemeProvider>
    );
};

export default App;
