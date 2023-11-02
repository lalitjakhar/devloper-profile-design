import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardPic from "../../Assets/Cardpic.jpg";
import Rating from "@mui/material/Rating";

export default function Services() {
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
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                "& h4": {
                  background: "linear-gradient(90deg, black 50%, white 50%)",
                  backgroundClip: "text",
                  color: "transparent",
                },
              }}
            >
              <Typography variant="h4">UX / UI</Typography>
              <Typography variant="h4">DESIGNER-PROFILE</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "80px",
              }}
            >
              <Box
                container
                sx={{
                  backgroundColor: "#7be045",
                  height: "75%",
                }}
              >
                <Box sx={{ paddingInline: "75px", paddingBlock: "30px" }}>
                  <CardActionArea sx={{ justifyContent: "center" }}>
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
                          variant="h4"
                          component="div"
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          Nusaiba Safeena
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#28402e",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          UX/UI Designer
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ fontSize: "16px", paddingTop: "10px" }}
                        >
                          Ui is the saddle,the stirrups & the reins. UX is the
                          feeling you get being able to ride the horse.
                        </Typography>
                      </CardContent>
                    </Stack>
                  </CardActionArea>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{marginBlock:'1rem', paddingBlock: "11px", paddingInline: "60px" }}
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
