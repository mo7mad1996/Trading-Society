import React from 'react';
import { Box, Typography } from '@mui/material';
import DemoPic from "../../assets/Fawzi.jpg";

// Array with data
const liveVideos = [
  { title: "First Live", description: "We had a talk about MT5 and how we can earn from Forex." },
  { title: "Second Live", description: "Discussed trading strategies and market analysis." },
  { title: "Third Live", description: "Explored advanced features of MT4 and MT5 platforms." },
  { title: "Fourth Live", description: "Understanding candlestick patterns in Forex trading." },
  { title: "Fifth Live", description: "How to manage risk and maximize profits." },
  { title: "Sixth Live", description: "Explaining the basics of technical analysis." },
];

const LiveVideoCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'space-between',
      }}
    >
      {liveVideos.map((video, index) => (
        <Box
          key={index}
          sx={{
            width: '30%', // 3 items per row
            borderRadius: '15px',
            backgroundColor: '#2B2B2B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            pt: '10px',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 80px 1px rgba(236, 188, 86, 1)', // Glow effect on hover
            },
            '&:hover .overlay': {
              opacity: 1, // Show overlay on hover
            },
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={DemoPic}
            alt={video.title}
            sx={{
              width: '95%',
              height: '200px',
              borderRadius: '15px',
              objectFit: 'cover',
            
            }}
          />
          {/* Overlay */}
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '15px',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              color: '#fff',
              fontSize: '2.5rem',
              fontWeight: 600,
              fontFamily: 'TanseekModernProArabic-ExBold',
            }}
          >
            Play Video
          </Box>
          {/* Title and Description */}
          <Box sx={{ padding: '15px', textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} color="text.mainTheme">
              {video.title}
            </Typography>
            <Typography lineHeight={1.5} variant="body1" color="text.secondary">
              {video.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LiveVideoCard;
