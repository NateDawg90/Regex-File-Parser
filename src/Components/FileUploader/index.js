import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class FileUploader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       file: null
    }
    this.fileSelect = this.fileSelect.bind(this);
  }
  
  fileSelect(e) {
    e.preventDefault();
    e.target.files.forEach(file => {
        this.setState({ file });
    })
  }
  render() {
    return (
      <div className="bg-light-gray br2">

        {/* <input id='myFile' class='dn' type="file" ref='fileField'  onchange={ this.fileSelect }/>  
        <label for='myFile' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored pa2 ph3 br2 mt3' >
            Choose Files
        </label> */}

        <Button containerelement='label' variant="contained" color="default"  onClick={this.upload} >
          <input type="file" onChange={this.props.onChange}/>
          Upload
          <CloudUploadIcon  />
         </Button>
      </div>
    );
  }
}

export default FileUploader;
