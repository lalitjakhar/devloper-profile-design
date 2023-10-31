import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: "#000000" }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontSize: "1.7rem",
                fontWeight: "600",
              }}
            >
              Designer Profile
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem sx={{ backgroundColor: "#25b900" }}>
                  <Button color="inherit">Home</Button>
                </MenuItem>
                <MenuItem sx={{ backgroundColor: "#25b900" }}>
                  <Button color="inherit">About</Button>
                </MenuItem>
                <MenuItem sx={{ backgroundColor: "#25b900" }}>
                  <Button color="inherit">Services</Button>
                </MenuItem>
                <MenuItem sx={{ backgroundColor: "#25b900" }}>
                  <Button color="inherit" onClick={() => navigate("/login")}>Contact</Button>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  display: "flex",
                  justifyContent: "end",
                },
                gap: 3,
              }}
            >
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
