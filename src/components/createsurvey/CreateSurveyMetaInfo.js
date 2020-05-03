import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TitleIcon from '@material-ui/icons/Title';
import NotesIcon from '@material-ui/icons/Notes';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(3),
  },
}));

const CreateSurveyMetaInfo = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: '',
    location: '',
    notes: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid container direction={"column"} className={classes.root}>

      <Grid item>
        <Typography variant={'h4'} align={'center'}>
          Beschreibe deine Motorradtour
        </Typography>
      </Grid>

      <FormControl fullWidth required className={classes.marginTop}>
        <InputLabel htmlFor="survey-title">Titel eingeben</InputLabel>
        <Input id="survey-title"
               value={values.title}
               onChange={handleChange('title')}
               inputProps={{
                 'aria-label': 'title',
               }}
               startAdornment={
                 <InputAdornment position="start">
                   <TitleIcon />
                 </InputAdornment>
               }/>
      </FormControl>

      <FormControl fullWidth className={classes.marginTop}>
        <InputLabel htmlFor="survey-location">Ort hinzufügen</InputLabel>
        <Input id="survey-location"
               value={values.location}
               onChange={handleChange('location')}
               inputProps={{
                 'aria-label': 'location',
               }}
               startAdornment={
                 <InputAdornment position="start">
                   <LocationOnIcon />
                 </InputAdornment>
               }/>
      </FormControl>

      <FormControl fullWidth aria-multiline={'true'} className={classes.marginTop}>
        <InputLabel htmlFor="survey-notes">Notiz hinzufügen</InputLabel>
        <Input id="survey-notes"
               value={values.notes}
               onChange={handleChange('notes')}
               inputProps={{
                 'aria-label': 'notes',
               }}
               startAdornment={
                 <InputAdornment position="start">
                   <NotesIcon />
                 </InputAdornment>
               }/>
      </FormControl>

    </Grid>
  )
};

export default CreateSurveyMetaInfo;
