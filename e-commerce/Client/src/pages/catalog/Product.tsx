import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AddShoppingCart, Info } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { IProduct } from "../../model/IProduct";
import { Link } from "react-router";
import { useState } from "react";
import requests from "../../api/requests";
import { LoadingButton } from "@mui/lab";
import { useCartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { currencyTRY } from "../../utils/formatCurrency";

interface Props {
    product: IProduct;
}

export default function Product({product}: Props) {

    const [loading, setLoading] = useState(false);
    const { setCart } = useCartContext();

    function handleAddItem(productId: number)
    {
      setLoading(true);

      requests.Cart.addItem(productId)
        .then(cart => {
          setCart(cart);
          toast.success("Sepetinize eklend.")
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }

    return(
      <Card>
        <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5000/images/${product.imageUrl}`}/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="text-secondary" >
            {product.name}
          </Typography>
          <Typography variant="body2" color="secondary">
            {currencyTRY.format(product.price)} ₺
          </Typography>
        </CardContent>
        <CardActions>          
          <LoadingButton startIcon={<AddShoppingCart/>} loadingPosition="start" variant="outlined" size="small" loading={loading} onClick={() => handleAddItem(product.id)} >Sepete Ekle</LoadingButton>
          <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<SearchIcon />} color="primary" >View</Button>
        </CardActions>
      </Card>
    );
}