import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useAppSelector } from "../../store/store";
import { currencyTRY } from "../../utils/formatCurrency";

export default function Infoo()
{

    const {cart} = useAppSelector(state => state.cart);
    const subTotal = cart?.cartItems.reduce((toplam, item) => toplam + (item.quantity * item.price), 0) ?? 0;
    const tax = subTotal * 0.2;
    const total = subTotal + tax;


    return (
        <>
            <Typography variant="subtitle2" sx={{color: "text.secondary"}}>Toplam</Typography>
            <Typography variant="h5" gutterBottom>
                {currencyTRY.format(total)}
            </Typography>
            <List>
                {cart?.cartItems.map((item) => (
                    <ListItem key={item.productId} sx={{py: 1, px: 0}}>
                        <ListItemAvatar>
                            <Avatar variant="square" src={`http://localhost:5000/images/${item.imageUrl}`}></Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{mr:2}} primary={item.name} secondary={`x ${item.quantity}`} />
                        <Typography variant="body1">
                            {currencyTRY.format(item.price)}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </>
    );
}