import { Box, Avatar, CircularProgress } from '@mui/material'
import AvatarImg from '../assets/avatar.png'

type Props = {
  size?: number
}

export function AvatarComponent({ size }: Props) {
  const progress = 60

  const transform = (size || 1) / 120

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        backgroundColor: 'gray',
        borderRadius: '50%',
        transform: `scale(${transform})`,
        transformOrigin: '0 0',
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
