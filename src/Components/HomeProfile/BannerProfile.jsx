import React from 'react';
import { Box } from '@mui/material';
import profileBanner from '../../home_profile_assets/IMG_2537.gif';

function BannerProfile() {
  return (
      <Box
        sx={{
          width: '100%',
          height: { xs: '350px', md: '300 ' }, // Responsive height
          mx: 'auto', // Centering horizontally
          overflow: 'hidden', // Prevent content spillover
          borderRadius: '15px', // Consistent rounded corners
        }}
      >
        <Box
          component="img"
          src={profileBanner}
          alt="Profile Banner"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Scales the image proportionally
            objectPosition: 'center',
            borderRadius: '15px',
          }}
        />
      </Box>
  );
}

export default BannerProfile;
