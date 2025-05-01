import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function AddressForm()
{

    const { register, formState: {errors} } = useFormContext();

    return (
        <Grid2 container spacing={3}>

            <Grid2 size={{xs: 12, md: 6}}>
                <TextField
                    {...register("firstName", {required: "firstName is required"})}
                    label="Enter firstName" 
                    size="small" 
                    fullWidth
                    sx={{mb: 2}}
                    error={!!errors.firstName}
                ></TextField>
            </Grid2>

            <Grid2 size={{xs: 12, md: 6}}>
                <TextField
                    {...register("lastName", {required: "lastName is required"})}
                    label="Enter lastname" 
                    size="small" 
                    fullWidth 
                    sx={{mb: 2}}
                    error={!!errors.lastName}
                ></TextField>
            </Grid2>

            <Grid2 size={{xs: 12, md: 6}}>
                <TextField
                    {...register("phone", {required: "phone is required"})}
                    label="Enter phone" 
                    size="small" 
                    fullWidth 
                    sx={{mb: 2}}
                    error={!!errors.phone}
                ></TextField>
            </Grid2>

            <Grid2 size={{xs: 12, md: 6}}>
                <TextField
                    {...register("city", {required: "city is required"})}
                    label="Enter city" 
                    size="small" 
                    fullWidth 
                    sx={{mb: 2}}
                    error={!!errors.city}
                ></TextField>
            </Grid2>

            <Grid2 size={{xs: 12}}>
                <TextField
                    {...register("addressline", {required: "addressline is required"})}
                    label="Enter addressline" 
                    size="small" 
                    fullWidth 
                    multiline
                    rows={4}
                    sx={{mb: 2}}
                    error={!!errors.addressline}
                ></TextField>
            </Grid2>

        </Grid2>
    )
}