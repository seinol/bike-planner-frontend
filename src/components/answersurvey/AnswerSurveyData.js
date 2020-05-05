import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { Typography } from '@material-ui/core';

const AnswerSurveyData = () => {
  const [columns] = useState([
    {
      name: 'participant',
      title: 'Teilnehmer',
    },
    {
      name: 'dateOne',
      title: '3. März',
    },
    {
      name: 'dateTwo',
      title: '4. März',
    },
    {
      name: 'dateThree',
      title: '5. März',
    },
  ]);
  const [rows] = useState([
    {
      participant: 'Jonas',
      dateOne: 'X',
      dateTwo: '',
      dateThree: 'X',
    },
    {
      participant: 'Hans',
      dateOne: '',
      dateTwo: 'X',
      dateThree: 'X',
    },
    {
      participant: 'Peter',
      dateOne: 'X',
      dateTwo: 'X',
      dateThree: 'X',
    },
  ]);

  return (
    <Box>

      <Typography variant="h4" align="center">
        Bereits ausgefüllt
      </Typography>
      <Grid
        rows={rows}
        columns={columns}
      >

        <Table />
        <TableHeaderRow />

      </Grid>
    </Box>
  );
};

export default AnswerSurveyData;
