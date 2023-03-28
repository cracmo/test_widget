import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import RewardShopImg from './assets/hero-reward-shop-mobile.png'
import Reward from './assets/shop-image.png'

export function RewardShopComponent() {
  const products = [
    { id: '1', name: 'Apple Watch 8', description: '', price: 300 },
    { id: '2', name: 'AirPods Pro', description: '', price: 400, level: 5 },
    { id: '3', name: 'Fire Stick', description: '', price: 30 },
    { id: '4', name: 'Alexa Speaker', description: '', price: 100 },
    { id: '5', name: 'AirTag', description: '', price: 100 },
  ]
  return (
    <Box p={2}>
      <CardMedia
        sx={{ width: '100%', height: 250, backgroundSize: 'contain', mb: 2 }}
        image={RewardShopImg}
        title="green iguana"
      />
      <Typography variant="h4" fontWeight={700} paragraph>
        Reward Shop
      </Typography>
      <Typography paragraph>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est eopksio laborum.
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={0}>
              <img width="100%" src={Reward} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={700}>
                  {product.name}
                </Typography>
                <Typography variant="body2">
                  {`${product.price} tokens`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
