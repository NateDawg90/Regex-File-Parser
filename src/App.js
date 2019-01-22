import React, { Component } from 'react';
import FileUploader from './Components/FileUploader';
import Header from './Components/Header';
import Description from './Components/Description';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      file: {},
      regex: '',
      err: ''
    }
    this.extensions =  ['txt', 'docx', 'doc'];
    this.handleInputChange = this.handleInputChange.bind(this);
  }  

  handleInputChange(name) {
    return (e) => {
      if (name === 'file') {
        var file = e.target.files[0];
        var ext = file.name.split('.').pop();
        if (!this.extensions.includes(ext)) {
          e.target.value = '';
          var err = 'Please use a valid file type.';
          this.setState({ err });
          return;
        }
        this.setState({ file });
      } else {
        this.setState({
          [name]: e.target.value
        });

      }
    }
  }

  parseFile() {
    // Make request to python server
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <div className='w-80 center mt5 flex justify-around items-center'>
          <FileUploader onChange={this.handleInputChange('file')} />
          
          <TextField
            id="standard-name" label="Enter a regex string" name="regex" value={this.state.regex} 
            className='mb2'
            onChange={this.handleInputChange('regex')} margin="normal"
          />

          <Button variant="contained" color="primary" size="large" >
            Send
            <Icon >send</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
