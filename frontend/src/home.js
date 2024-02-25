import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
// import cblogo from "./cblogo.PNG";
// import image from "./bg1.png";

import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@material-ui/core/colors';
import Clear from '@material-ui/icons/Clear';
import { BorderAll, BorderLeftOutlined } from "@material-ui/icons";

const video = {
  marginLeft: '348px',
  marginBottom: '-200px',
  marginTop: '-40%',
  width: '268px',
  height: '150px'
}

const navbar = {
  fontSize: '30px',
  fontWeight: 'bold',
  font: 'arial'
}

const front = {
  font: 'arial',
  fontSize: '18px',
  marginLeft: '20%',
  marginRight: '30%',
  marginTop: '2%'
  // marginTop: "10%"
}
const font2 = {
  font: 'arial',
  marginLeft: '20%',
  marginTop: '1%',
  color: '#8EB533'

}
const imgstyle = {
  width: '320px',
  height: '320px',
  marginLeft: '72%',
  marginTop: '-20%'
}
const imgstyle2 = {
  width: '320px',
  height: '320px',
  marginLeft: '5%',
  marginTop: '-500px'
}
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#ffffff7a',
    },
  },
}))(Button);
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  clearButton: {
    width: "-webkit-fill-available",
    borderRadius: "15px",
    padding: "15px 22px",
    color: "#000000a6",
    fontSize: "20px",
    fontWeight: 900,
    marginRight: '25px',
    marginLeft: '-23px'
  },
  root: {
    maxWidth: 345,
    flexGrow: 1,
    backgroundColor: '#f4c2c2',
  },
  media: {
    height: 400,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridContainer: {
    justifyContent: "center",
    padding: "4em 1em 0 1em",
  },
  // =================================================IMAGE CONTAINER===========================================================================
  mainContainer: {
    // backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: "93vh",
    marginTop: "8px",
  },
  // =======================================================================================================================================
  imageCard: {
    marginTop: '50px',
    marginLeft: "35%",
    // marginBottom: "700px",
    maxWidth: 400,
    height: 500,
    backgroundColor: 'transparent',
    boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
    borderRadius: '15px',
  },
  // =======================================================================================================================================
  imageCardEmpty: {
    height: '280px',
  },
  noImage: {
    margin: "auto",
    width: 400,
    height: "400 !important",
  },
  input: {
    display: 'none',
  },
  uploadIcon: {
    background: 'white',
  },
  tableContainer: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  table: {
    backgroundColor: 'transparent !important',
  },
  tableHead: {
    backgroundColor: 'transparent !important',
  },
  tableRow: {
    backgroundColor: 'transparent !important',
  },
  tableCell: {
    fontSize: '22px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableCell1: {
    fontSize: '14px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableBody: {
    backgroundColor: 'transparent !important',
  },
  text: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid: {
    maxWidth: "416px",
    width: "100%",
  },
  detail: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // ==============================================APPBAR===================================================================================
  appbar: {
    background: '#004953',

    boxShadow: 'none',
    color: '#8EB533',
  },
  loader: {
    color: '#be6a77 !important',
  }
}));
export const ImageUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;

  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL,
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
      }
      setIsloading(false);
    }
  }

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>

      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} style={navbar} variant="h6" noWrap>
            BlossomSnap
          </Typography>
          <div className={classes.grow} />
          {/* <Avatar src={cblogo}></Avatar> */}
        </Toolbar>
      </AppBar>
      <div>
        <div>
          <h1 style={font2}>
            BlossomSnap
          </h1>
          <h3 style={front}>
            As spring reaches much of the northern hemisphere, you might notice more and more flowers blooming. You might notice some pretty pink flowers in the trees near your bus stop, an unusual red flower on your hike, or small blue flowers along the sidewalk. Identifying flowers does not have to be a challenge thanks to instant flower identification with BlossomSnap.
          </h3>
        </div>
      </div>

      <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <div>
            <div style={video}>
              <iframe style={video} src="http://www.youtube.com/embed/i810CxN5Q6Q?start=16&mute=1&autoplay=1&loop=1&rel=0&fs=0&controls=0&disablekb=1&playlist=i810CxN5Q6Q" title="The Most Beautiful Flowers Collection 8K ULTRA HD / 8K TV"></iframe>
            </div>
          </div>

          <Grid item xs={12}>
            <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
              {image && <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={preview}
                  component="image"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              }
              {!image && <CardContent className={classes.content}>

                <DropzoneArea
                  acceptedFiles={['image/*']}
                  dropzoneText={"Drag and drop an image of a flower to process"}
                  onChange={onSelectFile}
                />

              </CardContent>}
              {data && <CardContent className={classes.detail}>
                <TableContainer component={Paper} className={classes.tableContainer}>
                  <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead className={classes.tableHead}>
                      <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell1}>Label:</TableCell>
                        <TableCell align="right" className={classes.tableCell1}>Confidence:</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBody}>
                      <TableRow className={classes.tableRow}>
                        <TableCell component="th" scope="row" className={classes.tableCell}>
                          {data.class}
                        </TableCell>
                        <TableCell align="right" className={classes.tableCell}>{confidence}%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>}
              {isLoading && <CardContent className={classes.detail}>
                <CircularProgress color="secondary" className={classes.loader} />
                <Typography className={classes.title} variant="h6" noWrap>
                  Processing
                </Typography>
              </CardContent>}
            </Card>
          </Grid>
          {data &&
            <Grid item className={classes.buttonGrid} >

              <ColorButton variant="contained" className={classes.clearButton} color="primary" component="span" size="large" onClick={clearData} startIcon={<Clear fontSize="large" />}>
                Clear
              </ColorButton>
            </Grid>}
        </Grid >

      </Container >
      <div>
        <div>
          <a href="https://www.quizony.com/what-s-your-favorite-flower/index.html"  target="_blank"><img style={imgstyle} src="https://i.pinimg.com/originals/68/0f/c9/680fc9de9eb119219bed84c22addbff5.png"></img></a>

        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=B-E6oOGeq0A" target ="_blank"><img style={imgstyle2} src="https://images.squarespace-cdn.com/content/v1/5eb02fa4ee4acc4933cbdb5e/1621340881272-JF42J131Y98M9RFK4ZBC/Bloomaker_flowerquotes_bloomaker.com"></img></a>

        </div>
      </div>
      <div style={them}>
        <h1 style={font3}>
          Themes
        </h1>
        <div className="card_display" style={flex}>
          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/world.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/worldflora" title="World flora" class="text-dark" style={flora}>
                  World flora
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Species of the World flora
              </h6>
            </div>
          </div>




          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/useful.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/usefulplants" title="World flora" class="text-dark" style={flora}>
                  Useful Plants
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Cultivated and ornamental plants
              </h6>
            </div>
          </div>




          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/weeds.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/weeds" title="World flora" class="text-dark" style={flora}>
                  Weeds
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Weeds in agricultural field
              </h6>
            </div>
          </div>





          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/invasion.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/Invasive" title="World flora" class="text-dark" style={flora}>
                  Invasive plants
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Invasive species potentially threatening livelihoods and the environment around the world
              </h6>
            </div>
          </div>





          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/prota.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/UsefulplantsofTropicalAfrica" title="World flora" class="text-dark" style={flora}>
                  Useful plants of Tropical Africa
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Plant Resources of Tropical Africa
              </h6>
            </div>
          </div>





          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/prosea.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/UsefulplantsofAsia" title="World flora" class="text-dark" style={flora}>
                  Useful plants of Asia
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Plant Resources of South East Asia
              </h6>
            </div>
          </div>

        </div>

        <h1 style={font4}>
          Oceania - Pacific

        </h1>
        <div className="card_display" style={flex}>
          <div class="card shadow-sm" style={col1}>
            <img src="	https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/endemia.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/NewCaledonia" title="World flora" class="text-dark" style={flora}>
                  New Caledonia
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Plants of New Caledonia
              </h6>
            </div>
          </div>


          <div class="card shadow-sm" style={col1}>
            <img src="	https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/hawai.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/Hawaii" title="World flora" class="text-dark" style={flora}>
                  Hawaii
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Hawaii
              </h6>
            </div>
          </div>



          <div class="card shadow-sm" style={col1}>
            <img src="https://identify.plantnet.org/_ipx/w_500,q_72/https://api.plantnet.org/public/projects/polynesiefr.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/french" title="World flora" class="text-dark" style={flora}>
                  French polynesia
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Plants of French Polynesia
              </h6>
            </div>
          </div>



        </div>

        <h1 style={font4}>
          Gardens by the Bay

        </h1>
        <div className="card_display" style={flex}>

          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/prosea.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/Gardens" title="Garden by the bay" class="text-dark" style={flora}>
                  Cloud Forest
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Garden by the bay
              </h6>
            </div>
          </div>

          <div class="card shadow-sm" style={col1}>
            <img src="https://api.plantnet.org/public/projects/prota.jpg" width="296" height="100" alt="World flora" loading="lazy" class="card-img-top"></img>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">
                <a href="/Flower" title="World flora" class="text-dark" style={flora}>
                  Useful plants of Tropical Flower
                </a>
              </h5>
              <h6 class="card-subtitle mb-3 text-muted" style={flora1}>
                Plant Resources of Tropical Flower
              </h6>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment >

  );
};

const them = {
  marginTop: '0%'
}
const flex = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  marginTop: '10%',
  marginLeft: '15%',
  marginRight: '15%',
  marginBottom: '20px'
}
const col1 = {
  marginLeft: '10%',
  marginTop: '10%',
  marginRight: '6.48%',
  boxShadow: '-1px 0 10px #8EB533',

}
const flora = {
  marginLeft: '5px',
  font: 'arial',
  fontSize: '30px',
}
const flora1 = {
  marginLeft: '2px',
  marginTop: '-5px',
  marginBottom: '6px',
  font: 'arial',
  fontSize: '16px',
  color: 'gray',
}
const font3 = {
  marginLeft: '17%',
  marginBottom: '-10%',
  color: '#8EB533',
  marginTop: '10%'
}
const font4 = {
  marginLeft: '17%',
  marginBottom: '-10%',
  color: '#8EB533',
  marginTop: '10%'
}
