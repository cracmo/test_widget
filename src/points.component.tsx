import { Box, Grid, Paper, Typography } from '@mui/material'

export function PointsComponent() {
  return (
    <Grid container spacing={2}>
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
    </Grid>
  )
}
