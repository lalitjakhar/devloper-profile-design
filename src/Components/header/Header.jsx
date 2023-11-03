import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import CardPic from "../../Assets/Cardpic.avif";
import Rating from "@mui/material/Rating";

export default function Header() {
  const [value, setValue] = React.useState("2");
  return (
    <>
      <Container>
        <Box sx={{ marginBlock: "2rem" }}>
          <Grid
            container
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              background: "linear-gradient(90deg, red 50%, black 50%)",
            }}
          >
            <Grid
              container
              direction="column"
              item
              xs={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                "& h4": {
                  background: "linear-gradient(90deg, black 50%, white 50%)",
                  backgroundClip: "text",
                  color: "transparent",
                  paddingBlock: "2rem",
                },
              }}
            >
              <Typography variant="h4">DEVELOPER's-PROFILE</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "10px 100px 100px 100px",
              }}
            >
              <Box
                container
                sx={{
                  backgroundColor: "#7be045",
                }}
              >
                <Box sx={{ padding: "50px" }}>
                  <Stack
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <CardMedia
                      component="img"
                      image={CardPic}
                      alt="green lady profile"
                      sx={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    />
                  </Stack>
                  <Stack
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h3"
                        component="div"
                        sx={{
                          fontWeight: "800",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Ching Chang Chong
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#28402e",
                          display: "flex",
                          justifyContent: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        Frontend Developer
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        sx={{
                          color: "#3a09ff",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "16px", paddingTop: "10px" }}
                      >
                        I am a highly analytical front-end developer with
                        expertise in HTML, CSS, JavaScript, and various
                        front-end frameworks. I develop dynamic and responsive
                        interfaces that meet client needs. With a deep
                        understanding of front-end development best practices, I
                        am an innovative developer experienced in React. I am an
                        enthusiastic, self-motivated, reliable, responsible and
                        hard working person. I am a mature team worker and
                        adaptable to all challenging situations.
                      </Typography>
                    </CardContent>
                  </Stack>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        paddingBlock: "11px",
                        paddingInline: "60px",
                      }}
                    >
                      Follow
                    </Button>
                  </CardActions>
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-evenly",
                      backgroundColor: "white",
                      gap: "50px",
                    }}
                  >
                    <Box columns={3}>
                      <Typography>
                        <h4>5896</h4>
                      </Typography>
                      <Typography>
                        <h5>Posts</h5>
                      </Typography>
                    </Box>
                    <Box columns={3}>
                      <Typography>
                        <h4>8952</h4>
                      </Typography>
                      <Typography>
                        <h5>Likes</h5>
                      </Typography>
                    </Box>
                    <Box columns={3}>
                      <Typography>
                        <h4>6545</h4>
                      </Typography>
                      <Typography>
                        <h5>Followers</h5>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
