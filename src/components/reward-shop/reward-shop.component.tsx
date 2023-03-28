import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import RewardShopImg from '../../assets/hero-reward-shop-mobile.png'
import { RewardShopContext } from './reward-shop.context'

type ProductType = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export function RewardShopComponent() {
  const { t } = useTranslation()

  const { cart, setCart } = useContext(RewardShopContext)

  const [dialog, setDialog] = useState<{
    open: boolean
    product: ProductType | null
  }>({
    open: false,
    product: null,
  })

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((actualData) => setProducts(actualData.products))
  }, [])

  const handleOpenRewardModal = (product: any) => {
    setDialog({
      open: true,
      product,
    })
  }

  return (
    <>
      <Box p={2}>
        <CardMedia
          sx={{ width: '100%', height: 250, backgroundSize: 'contain', mb: 2 }}
          image={RewardShopImg}
          title="reward shop"
        />
        <Typography variant="h4" fontWeight={700} paragraph>
          {t('reward_shop')}
        </Typography>
        <Typography paragraph>{t('reward_shop_description')}</Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Card elevation={0}>
                <CardActionArea onClick={() => handleOpenRewardModal(product)}>
                  <img
                    width="100%"
                    style={{ maxHeight: 150, objectFit: 'contain' }}
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight={700}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2">
                      {`${product.price} tokens`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog
        onClose={() => setDialog({ open: false, product: null })}
        open={dialog.open}
      >
        <DialogContent>
          <Card elevation={0}>
            <CardActionArea
              onClick={() => handleOpenRewardModal(dialog.product)}
            >
              <img
                width="100%"
                src={dialog.product?.images[0]}
                alt={dialog.product?.title}
                style={{ maxHeight: 250, objectFit: 'contain' }}
              />
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h5" fontWeight={700}>
                    {dialog.product?.title}
                  </Typography>
                  <Typography variant="body2">
                    {`${dialog.product?.price} tokens`}
                  </Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  {t('your_balance')}: 2400 tokens
                </Typography>
                <Typography variant="body2">
                  {dialog.product?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              dialog.product?.id &&
                setCart([
                  ...cart,
                  {
                    id: dialog.product?.id,
                    quantity: 1,
                  },
                ])
            }}
          >
            {t('buy_now')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
