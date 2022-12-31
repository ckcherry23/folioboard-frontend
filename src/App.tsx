import Home from './pages/Home';
import Post from './pages/Post';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: '#A998E7',
        },
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/post/1" element={<Post />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
