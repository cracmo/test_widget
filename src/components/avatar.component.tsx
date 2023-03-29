import { Box, Avatar, CircularProgress } from '@mui/material'

type Props = {
  size?: number
}

const AvatarImg =
  'https://firebasestorage.googleapis.com/v0/b/crm-jackpots.appspot.com/o/jp-dev%2FCris%2Fduck.jpg?alt=media&token=3e235a2e-2895-4fec-8c26-01d6626a9f49'

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
