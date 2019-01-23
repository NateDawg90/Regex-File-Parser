import React, { Component } from 'react';
import axios from 'axios';
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
      file: null,
      regex: '',
      err: '',
      matches: []
    }
    this.extensions =  ['txt'];
    this.handleInputChange = this.handleInputChange.bind(this);
    this.parseFile = this.parseFile.bind(this);
  }  

  handleInputChange(name) {
    return (e) => {
      if (name === 'file') {
        var file = e.target.files[0];
        var err = ''
        var ext = file.name.split('.').pop();
        if (!this.extensions.includes(ext)) {
          e.target.value = '';
          err = 'Please use a valid file type.';
          file = null;
          this.setState({ err, file });
          return;
        }
        this.setState({ err, file });
      } else {
        this.setState({
          [name]: e.target.value
        });

      }
    }
  }

  parseFile() {
    var headers = { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' };
    var payload = new FormData();
    payload.append("file", this.state.file);
    payload.append("regex", this.state.regex);
    var path = 'http://127.0.0.1:5000/parse';
    axios.post(path, payload, headers).then(response => {
      var matches = response.data.matches;
      this.setState({ matches });
    })
  }

  render() {
    var matches = this.state.matches.length > 0;
    return (
      <div className="App">
        <Header />
        <Description />
        <div className='w-80 center mt5 flex justify-around items-center'>
          <FileUploader onChange={this.handleInputChange('file')} />
          
          <TextField
            id="standard-name" label="Enter a regex string" name="regex" value={this.state.regex} 
            className='self-start'
            onChange={this.handleInputChange('regex')} margin="normal"
          />

          <Button variant="contained" color="primary" size="large" disabled={!this.state.regex || !this.state.file} onClick={this.parseFile}>
            Send
            <Icon >send</Icon>
          </Button>
        </div>
        <div className='w-80 center flex flex-wrap justify-center items-center mt3'>
          {matches && (
              <div>Indices:</div>
          )}
          {!matches && (
              <div>No Indices!</div>
          )}
          {this.state.matches.map((m, idx) => {
                  return <span key={idx} className='ma2'>{m}</span>
          })}
        </div>
      </div>
    );
  }
}

export default App;
