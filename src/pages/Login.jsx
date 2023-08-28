import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
  Avatar,
  Paper,
} from "@mui/material";

export function Login() {
  const onSubmit = (e) => e.preventDefault();

  return (
	<Grid container component='main' sx={{ height: "100vh" }}>
	  <Grid
		item
		xs={false}
		sm={4}
		md={7}
		sx={{
		  backgroundImage:
			"url(https://images.unsplash.com/photo-1610880846497-7257b23f6138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80)",
		  backgroundRepeat: "no-repeat",
		  backgroundSize: "cover",
		  backgroundColor: (t) =>
			t.palette.mode === "light"
			  ? t.palette.grey[50]
			  : t.palette.grey[900],
		  backgroundPosition: "center",
		}}
	  />
	  <Grid item xs={12} sm={8} md={5} component={Paper} square elevation={6}>
		<Box
		  sx={{
			my: 8,
			mx: 4,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
   		  }}
		>
		  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
  		  <Typography variant='h5' color='secondary.main'>
			Sign in
  		  </Typography>
		  <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
		    <TextField
			  margin='normal'
			  required
			  fullWidth
			  label='Email address'
			  name='email'
			  autoFocus
			/>
		    <TextField
			  margin='normal'
  			  required
			  fullWidth
			  id='password'
			  label='Password'
			  name='password'
			  type='password'
			  autoFocus
			/>
		    <FormControlLabel control={<Checkbox />} label='Remember me' />
			<Link href='/' sx={{ mt: 3, mb: 2, width: '100%', bgcolor: 'primary', display: 'block', textAlign: 'center' }} variant="h6">
			  Sign in
			</Link>
			<Grid container>
			  <Grid item xs>
				<Link href='#' variant='body2'>
				  Forgot password?
				</Link>
			  </Grid>
			  <Grid item>
				<Link href='#' variant='body2'>
				  Don't have an account? Sign up!
				</Link>
			  </Grid>
		    </Grid>
		    <Typography variant='body2' color='text.secondary' align='center'>
		      Copyright @{" "}
			  <Link color='inherit' href='#'>
				My website
			  </Link>{" "}
			  {new Date().getFullYear()}
		    </Typography>
		  </Box>
	    </Box>
	  </Grid>
    </Grid>
 );
}

