import Musician from "./musician"

// Material-ui
import Grid from "@mui/material/Grid"

const Musicians = ({ selectedMusicians }) => {
  return (
    <div className="musicians">
      <Grid container spacing={3}>
        {selectedMusicians.map((element) => {
          return <Musician musician={element} />
        })}
      </Grid>
    </div>
  )
}

export default Musicians
