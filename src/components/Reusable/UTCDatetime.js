import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const ISTDatetime = () => {
  const utcDate = new Date(getUTCDatetime());

  // Convert to IST (UTC + 5:30)
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffsetMs);

  const formattedIST = istDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {formattedIST} IST
    </Typography>
  );
};

export default ISTDatetime;
