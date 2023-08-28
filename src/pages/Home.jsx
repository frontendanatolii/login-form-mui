import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'

export function Home() {
  const data = [
    {
      id: 1,
      name: 'blog 1',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 2,
      name: 'blog 2',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 3,
      name: 'blog 3',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 4,
      name: 'blog 4',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 5,
      name: 'blog 5',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 6,
      name: 'blog 6',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 7,
      name: 'blog 7',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 8,
      name: 'blog 8',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 9,
      name: 'blog 9',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
    {
      id: 10,
      name: 'blog 10',
      image: 'https://source.unsplash.com/random?wallpapers' ,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus veniam assumenda asperiores, facilis odio dolorem suscipit laborum ad in magnam maxime, magni blanditiis nisi consequuntur. Ab consequuntur ipsam nobis.'
    },
  ]

  return (
    <Box>
      <Box>
        <Container>
          <Typography
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            My blog website
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa error veritatis placeat nisi excepturi amet odit quibusdam accusantium nam eaque.
          </Typography>
          <Stack sx={{pt: 4}} direction='row' spacing={2} justifyContent='center'>
            <Button variant='contained'>
              Popular blogs
            </Button>
            <Button variant='outlined'>
              New blog
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2} mt={2}>
          {data.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component='div' sx={{pt: '56.25%'}} image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>{item.name}</Typography>
                  <Typography>{item.text}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>View</Button>
                  <Button size='small'>Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{bgcolor: 'background.paper', p: 6}} component='footer'>
        <Typography variant='body2' color='text.secondary' align='center'>
		      Copyright @{" "}
			    <Link color='inherit' href='#'>
				    My website
			    </Link>{" "}
			    {new Date().getFullYear()}
		    </Typography>
      </Box>
    </Box>
  )
}
