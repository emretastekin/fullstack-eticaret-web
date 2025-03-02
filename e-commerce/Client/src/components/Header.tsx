import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">E-Commerce</Typography>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }