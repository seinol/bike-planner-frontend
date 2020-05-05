import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function LoginMetaInfo() {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Aktuell bieten wir Google Login an
      </Typography>
      <Typography variant="h6" align="center">
        Du wirst bei erfolgreicher Anmeldung automatisch weitergeleitet
      </Typography>
    </Box>
  );
}
