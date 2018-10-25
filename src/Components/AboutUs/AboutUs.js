import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core/';

import './AboutUs.scss';

const aboutUs = () => (
  <div>
    <Grid container spacing={24} className="grid">
      <Grid item xs={3}>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Layer"
              image="https://cdn.discordapp.com/avatars/497342095154085899/171a9c1542a9ba09f929661959ee84c8.png"
              title="Layer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Layer</Typography>
              <Typography component="p">A proud member of Team 1 <hr /> Programming Team (Reddit)</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Adrian Hajdin"
              image="https://avatars3.githubusercontent.com/u/24898559?s=460&v=4"
              title="Adrian Hajdin"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Adrian Hajdin</Typography>
              <Typography component="p">A proud member of Team 1 <hr /> Programming Team (Reddit)</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Beard Dev"
              image="https://media.discordapp.net/attachments/503527419051900939/504780966829752320/IMG_7913_1.jpg?width=386&height=514"
              title="Beard Dev"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Beard Dev</Typography>
              <Typography component="p">A proud member of Team 1 <hr /> Programming Team (Reddit)</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Mr Wharfsnort"
              image="https://cdn.discordapp.com/avatars/272870377548546049/58d84f76e2d79ad9c0b7a1cdc2c839b2.png"
              title="Mr Wharfsnort"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Mr. Wharfsnort</Typography>
              <Typography component="p">A proud member of Team 1 <hr /> Programming Team (Reddit)</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>

  </div>
);

export default aboutUs;
