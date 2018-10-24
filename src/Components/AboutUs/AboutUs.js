import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core/';

import './AboutUs.scss';

const aboutUs = () => (
  <div>
    <Grid container spacing={24} style={{ padding: '25px' }} className="grid">
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Person 1"
              image="https://image.shutterstock.com/image-photo/happy-businessman-isolated-handsome-man-260nw-609414131.jpg"
              title="Person 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">John Doe</Typography>
              <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam sit amet tortor dignissim, in elementum ex dapibus. Curabitur felis dui, lacinia ut diam sit amet, aliquet vulputate urna. Curabitur et lobortis sapien, nec luctus leo.</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Person 2"
              image="https://image.shutterstock.com/image-photo/happy-businessman-isolated-handsome-man-260nw-609414131.jpg"
              title="Person 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">John Doe</Typography>
              <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam sit amet tortor dignissim, in elementum ex dapibus. Curabitur felis dui, lacinia ut diam sit amet, aliquet vulputate urna. Curabitur et lobortis sapien, nec luctus leo.</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Person 3"
              image="https://image.shutterstock.com/image-photo/happy-businessman-isolated-handsome-man-260nw-609414131.jpg"
              title="Person 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">John Doe</Typography>
              <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam sit amet tortor dignissim, in elementum ex dapibus. Curabitur felis dui, lacinia ut diam sit amet, aliquet vulputate urna. Curabitur et lobortis sapien, nec luctus leo.</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Github</Button>
            <Button size="small" color="primary">LinkedIn</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Person 4"
              image="https://image.shutterstock.com/image-photo/happy-businessman-isolated-handsome-man-260nw-609414131.jpg"
              title="Person 4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">John Doe</Typography>
              <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam sit amet tortor dignissim, in elementum ex dapibus. Curabitur felis dui, lacinia ut diam sit amet, aliquet vulputate urna. Curabitur et lobortis sapien, nec luctus leo.</Typography>
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
