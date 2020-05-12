import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const AnswerSurveyDataTable = ({ surveyData, surveyDates }) => {
  const cols = [];
  surveyData.surveyGroups[0].surveyElements.forEach((date, index) => {
    const dateTitle = new Date(surveyDates
      .find((toFind) => toFind.id === date.id).date)
      .toLocaleDateString('de-CH', { day: 'numeric', month: 'long' });

    const col = {
      name: `date${index}`,
      title: dateTitle,
    };

    cols.push(col);
  });

  const [rows] = useState(surveyData.participants.map((participant) => {
    const row = {
      participant: `${participant.firstname} ${participant.lastname.charAt(0)}.`,
    };

    cols.forEach((date, index) => {
      row[date.name] = surveyData.answers.filter(
        (data) => data.person.id === participant.id,
      )[index].selectedAnswer === 'YES' ? 'X' : '';
    });

    return row;
  }));

  cols.unshift({
    name: 'participant',
    title: 'Teilnehmer',
  });

  const [columns] = useState(cols);

  return (
    <Box mt={2}>

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

export default AnswerSurveyDataTable;
