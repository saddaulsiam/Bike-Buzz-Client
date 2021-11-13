import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import bg from '../../../images/banner-bg.png'
import PrimaryButton from '../../../StyledComponent/MuiButton';

const Banner = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    root: {
      height: '90vh',
      marginTop: '65px',
    },
    background: {
      backgroundImage: `url(${bg}), linear-gradient(#e7dfdf,#fff)`,
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    bannerTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    },
    bannerText: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        // fontWeight: 'bold',
        // textAlign: 'center',
        padding: '40px 20px 20px 20px'
      },
    }
    ,
    bannerButton: {
      [theme.breakpoints.down('sm')]: {
        padding: '0px 0px 50px 0px',
        textAlign: 'center',
      },
    }
  })

  const { root, background, bannerTitle, bannerText, bannerButton } = useStyle()

  return (
    <Box className={background} >
      <Grid className={root} container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <img width="100%" src="https://i.ibb.co/fXkPw6g/banner.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', m: 0 }}>
          <Box sx={{ alignItems: 'center' }} >
            <Typography className={bannerTitle} variant="h2" sx={{ fontWeight: 600 }}>
              EVERYTHING <br /> MOTORSPORTS
            </Typography>
            <Typography className={bannerText} variant="body1" sx={{ fontSize: 18, color: 'gray', py: 3 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aliquam amet possimus, <br />
              nemo quis eaque  quae quaerat earum aspernatur cumque!
            </Typography>
            <Box className={bannerButton}><PrimaryButton>VIEW MORE</PrimaryButton></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;