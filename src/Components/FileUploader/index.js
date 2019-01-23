import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
      <div className=" br2">

        <Button containerelement='label' variant="contained" color="default"  onClick={this.upload} >
          <input type="file" onChange={this.props.onChange}/>
          
         </Button>
      </div>
    );
  }
}

export default FileUploader;
