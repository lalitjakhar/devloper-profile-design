import React from "react";
import { AppBar, Box, Button, Container, IconButton } from "@mui/material";
import { Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

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
      <AppBar position="sticky" sx={{ backgroundColor: "#000000" }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontSize: "1.7rem",
                "@media (max-width: 380px)": {
                  fontSize: "1.1  rem",
                },
                fontWeight: "600",
              }}
            >
              Developer Profile
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
                <MenuItem>
                  <Button color="inherit" onClick={() => navigate("/")}>
                    Home
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="inherit" onClick={() => navigate("/blog")}>
                    About
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="inherit" onClick={() => navigate("/services")}>
                    Services
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="inherit" onClick={() => navigate("/login")}>
                    Login
                  </Button>
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
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/blog")}>
                About
              </Button>
              <Button color="inherit" onClick={() => navigate("/services")}>
                Services
              </Button>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
