import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm()
{
    const { register, formState: {errors} } = useFormContext();
    
        return (
            <Grid2 container spacing={3}>
    
                <Grid2 size={{xs: 12, md: 6}}>
                    <TextField
                        {...register("cardname", {required: "Card name is required"})}
                        label="Enter card name" 
                        size="small" 
                        fullWidth
                        sx={{mb: 2}}
                        error={!!errors.cardname}
                    ></TextField>
                </Grid2>
    
                <Grid2 size={{xs: 12, md: 6}}>
                    <TextField
                        {...register("cardnumber", {required: "Card number is required"})}
                        label="Enter card number" 
                        size="small" 
                        fullWidth 
                        sx={{mb: 2}}
                        error={!!errors.cardnumber}
                    ></TextField>
                </Grid2>
    
                <Grid2 size={{xs: 6, md: 4}}>
                    <TextField
                        {...register("cardexpiremonth", {required: "Expiry month is required"})}
                        label="Enter expiry month" 
                        size="small" 
                        fullWidth 
                        sx={{mb: 2}}
                        error={!!errors.cardexpiremonth}
                    ></TextField>
                </Grid2>

                <Grid2 size={{xs: 6, md: 4}}>
                    <TextField
                        {...register("cardexpireyear", {required: "Expiry year is required"})}
                        label="Enter expiry year" 
                        size="small" 
                        fullWidth 
                        sx={{mb: 2}}
                        error={!!errors.cardexpireyear}
                    ></TextField>
                </Grid2>
    
                <Grid2 size={{xs: 12, md: 4}}>
                    <TextField
                        {...register("cardcvc", {required: "Cvc is required"})}
                        label="Enter cvc" 
                        size="small" 
                        fullWidth 
                        sx={{mb: 2}}
                        error={!!errors.cardcvc}
                    ></TextField>
                </Grid2>
    
            </Grid2>
        )
}