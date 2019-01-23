import React, { Component } from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Description extends Component {
  render() {
    return (
      <Card className='w-20 h-20 center mt4' >
        <CardContent>
          <Typography component="p">1. Upload a file from your computer (txt only)</Typography>
          <Typography component="p">2. Enter a Regex string e.g. A.*32b+Y</Typography>
          <Typography component="p">3. Click "Send" to return all starting indices of substring matches</Typography>
          <Typography  component="h2">
            <strong>Note: The file will be parsed with a "greedy" match policy!</strong>
          </Typography>
        </CardContent>
      </Card>   
    )
  }
}
