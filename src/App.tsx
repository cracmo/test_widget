import './App.css'
import { Paper, Grid, Box, Typography } from '@mui/material'
import { AvatarComponent } from './avatar.component'
import GoldMedalImg from './assets/gold.png'

function App({ domElement }: { domElement: Element }) {
  const json = domElement.getAttribute('data-json') || ''
  const info = JSON.parse(json)
  console.log(info)
  return (
    <Box m={2}>
      <Box display="flex" gap={1} alignItems="center" mb={2}>
        <AvatarComponent size={info.size} />
        <Box>
          <Typography variant="h5">
            Hello, <strong>{`${info.firstName} ${info.lastName}`}</strong>
          </Typography>

          <Typography
            variant="body2"
            display="flex"
            gap={0.5}
            alignItems="center"
          >
            <img alt="gold medal" src={GoldMedalImg} width={24} height={27} />
            Rank Gold
          </Typography>
        </Box>
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box component={Paper} p={2}>
            <Typography variant="body2">XP Points</Typography>
            <Typography variant="h5" fontWeight={700}>
              450
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component={Paper} p={2}>
            <Typography variant="body2">Tokens</Typography>
            <Typography variant="h5" fontWeight={700}>
              250
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  )
}

export default App
