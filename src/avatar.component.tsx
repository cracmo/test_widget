import { Box, Avatar, CircularProgress } from '@mui/material'
import AvatarImg from './assets/leo.png'

export function AvatarComponent() {
  const progress = 50

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        backgroundColor: 'gray',
        borderRadius: '50%',
      }}
    >
      <Avatar
        sx={{
          top: 10,
          left: 10,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
        }}
        alt="Remy Sharp"
        src={AvatarImg}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={120}
        sx={{
          color: '#7750F9',
          circle: {
            strokeLinecap: 'round',
          },
        }}
      />
    </Box>
  )
}
