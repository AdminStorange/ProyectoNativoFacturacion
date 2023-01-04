import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import classes from '../../theme/Styles';
import './LoginContainer.css'

const LoginContainer = () => {

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        if(data.get('user') === 'storange' && data.get('password') === 'Storange2022'){
            localStorage.setItem('isTrustedUser', true)
            navigate('/facturacion')
        } else{
            alert('Usuario y/o contraseña incorrecta')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('isTrustedUser') === 'true'){
            navigate('/facturacion')
        }
    }, [])

    return (
        <div className="loginContainer">
            <Container component="main" maxWidth="xs">
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <div className='logoSignin'>
                        <img src="https://storange-images.s3.amazonaws.com/img/spinner_storange_o.png" alt="storange signin" />
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Usuario"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Recordar usuario"/>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        className='Button'
                        sx={classes.button}
                        >
                        Sign In
                        </Button>
                        {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default LoginContainer