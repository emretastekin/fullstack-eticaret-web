import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { IProduct } from "../../model/IProduct";
import { Link } from "react-router";
import { LoadingButton } from "@mui/lab";
import { currencyTRY } from "../../utils/formatCurrency";
import { addItemToCart } from "../cart/cartSlice";
import { useAppSelector, useAppDispatch } from "../../store/store";

interface Props {
    product: IProduct;
}

export default function Product({product}: Props) {

    const { status } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();


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
          <LoadingButton startIcon={<AddShoppingCart/>} loadingPosition="start" variant="outlined" size="small" loading={status ==="pendingAddItem" + product.id } onClick={() => dispatch(addItemToCart({productId: product.id}))} >Sepete Ekle</LoadingButton>
          <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<SearchIcon />} color="primary" >View</Button>
        </CardActions>
      </Card>
    );
}