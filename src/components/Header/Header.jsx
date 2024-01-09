import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Header.module.scss';

function Header() {
    return (
        <AppBar className={styles.header} position="fixed">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Cédric
                </Typography>
                <Button color="inherit" component={Link} to="/portfolio/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
