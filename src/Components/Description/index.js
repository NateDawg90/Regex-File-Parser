import React, { Component } from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Description extends Component {

  render() {
    return (
        <Card className='w-20 h-20 center mt4' >
            <CardActionArea>
                <CardContent>
                    <Typography component="p">1. Upload a file from your computer (txt or docx)</Typography>
                    <Typography component="p">2. Enter a Regex string e.g. A.*32b+Y</Typography>
                    <Typography component="p">3. Click "Send" to parse the file</Typography>
                </CardContent>
            </CardActionArea>
        </Card>   
    )
  }
}
