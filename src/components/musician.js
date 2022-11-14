// Material-ui
import { Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Musician = ({ musician }) => {
  return (
    <Grid item xs={12} md={3} key={musician.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className="img__musician"
          component="img"
          height="140"
          image={musician.image}
          alt={musician.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {musician.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Afficher les 200 premiers caractères de la description */}
            {musician.description.substring(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions>
          <a href={musician.link} target="_blank" rel="noreferrer">
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Musician
