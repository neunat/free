import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Highlight from 'react-highlight.js';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#23272A',
    height: '100vh',
  },
  title: {
    paddingTop: '1rem',
    paddingBotton: '1rem',
  },
  subHeading: {
    textIndent: '50px',
  },
}));

export default function SignUp(json) {
  const classes = useStyles();
  const { code, date, lang, output } = json.json; // wtf dunno why this does this

  return (
    <div className={classes.background}>
      <Container component="main" maxWidth="md">
        <Typography variant="h2" align="center" className={classes.title}>
          Evaller Share
        </Typography>
        <Divider />
        <Typography variant="body1" className={classes.title}>
          Here is your evaluated Code!
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Code Info:
        </Typography>
        <Typography variant="body1" className={classes.subHeading}>
          Written in:{' '}
          <span style={{ backgroundColor: '#2C2F33' }}>
            {lang || 'something broke'}
          </span>
        </Typography>
        <Typography variant="body1" className={classes.subHeading}>
          Originally saved at:{' '}
          <span style={{ backgroundColor: '#2C2F33' }}>
            {Date(date * 1000) || 'something broke'}
          </span>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Code:
        </Typography>
        <Highlight language="javascript" style={{ marginTop: '0' }}>
          {code || 'something broke'}
        </Highlight>
        <Typography variant="h6" className={classes.title}>
          Output:
        </Typography>
        <Highlight language="javascript" style={{ marginTop: '0' }}>
          {output || 'something broke'}
        </Highlight>
      </Container>
    </div>
  );
}