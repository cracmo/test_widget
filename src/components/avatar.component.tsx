import { useContext } from 'react'
import { Box, Avatar, CircularProgress } from '@mui/material'
import { AssetsContext, AvatarImg } from './assets'

type Props = {
  size?: number
}

export function AvatarComponent({ size }: Props) {
  const { images } = useContext(AssetsContext)

  const progress = 60

  const transform = (size || 1) / 120

  return (
    <Box width={size || 120} height={size || 120}>
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
          src={images?.avatar_image || AvatarImg}
        />
        <CircularProgress
          variant="determinate"
          value={progress}
          size={120}
          sx={{
            color: 'primary.main',
            circle: {
              strokeLinecap: 'round',
            },
          }}
        />
      </Box>
    </Box>
  )
}
