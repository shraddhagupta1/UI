import React, { Component } from 'react';
import axios from 'axios';
class UploadFiles extends Component{

    state = {
        file : '',
       
    };
    
    componentDidMount = () => {
        const {file} = this.props;
        this.setState({ file })
    };
    
    uploadFile = ({target : {files}}) => {
        console.log(files[0]);
        let data = new FormData();
        data.append('file', files[0]);
    
    
        axios.post("http://localhost:8081/post/upload", data)
            .then(res => {
                this.setState({ check: true });
                console.log(res)})
    };
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files color">
                            <label className ="text-center">Upload Your File </label>
                            <input type="file" onChange={this.uploadFile}/>
                        </div>
                    </div>
                </div>
                {this.state.check && <div> <h2 className ="text-center">UPLOADED SUCCESSFULLY</h2> 
                </div>}
            </div>
        );
    }}
    export default UploadFiles;