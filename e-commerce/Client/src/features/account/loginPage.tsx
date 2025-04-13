import { LockOutlined, Password } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { data } from "react-router";
import requests from "../../api/requests";

export default function LoginPage()
{

    const {register, handleSubmit} = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });


    async function submitForm(data: FieldValues) {
        await requests.Account.login(data);
    }

    return (
        <Container maxWidth="xs" >
            <Paper sx={{marginTop: 8, padding: 2}} elevation={3}>
                <Avatar sx={{mx: "auto", color: "secondary.main", textAlign:"center", mb: 1}}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{textAlign: "center"}}>Login</Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{mt: 2}}>
                    <TextField {...register("username")} label="Enter username" size="small" fullWidth required autoFocus sx={{mb: 2}}></TextField>
                    <TextField {...register("password")} label="Enter password" size="small" type="password" fullWidth required sx={{mb: 2}}></TextField>
                    <Button type="submit" variant="contained" size="small" fullWidth sx={{mt: 1}}>Login</Button>
                </Box>
            </Paper>
        </Container>
    )
}