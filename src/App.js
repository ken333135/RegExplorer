import React from 'react';
import './App.css';

function CreateTextbox(props) {
  return (
    <div className="textboxContainer">
      <div className="labelbox">
        <label for="textbox">Your Text Here</label>
      </div>
      <textarea id="textbox" onChange={props.handleTextChange}  />
    </div>
  );
}

function CreateRegexbox(props) {
  return (
    <div className="regexboxContainer">
      <div className="labelbox">
        <label for="regexbox">Regular Expression</label>
      </div>
      <input id="regexbox" onChange={props.handleRegexChange}  />
    </div>
  );
}

function CreateOutputbox(props) {
  var output = '';
  var x;
  for (x in props.output) {
    output += props.output[x]+' ';
  }
  return (
    <div className="outputboxContainer">
      <div className="container">
        <p id="outputbox">{output}</p>
      </div>
    </div>
  );
}

function CreateHeader(props) {
  return (
    <div className="headerContainer">
      <h1 style={{fontFamily:"Arvo", Color:"#408295"}}>RegExplorer</h1>
    </div>
  )
}

function findall(regex,text) {
  let output_list = [];


  return output_list;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      regex: '',
      output: 'hello'
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRegexChange = this.handleRegexChange.bind(this);
  }

  handleTextChange2(event) {
    this.setState({text: event.target.value});
    let output
    try {
      let re= new RegExp(this.state.regex)
      output = re.exec(event.target.value)
    }
    catch(err) {
      output = "Error"
    }
    this.setState({output: output})
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
    let output
    try {
      output = (event.target.value).match(RegExp(this.state.regex,'g'))
    }
    catch(err) {
      output = "Error!"
    }
    this.setState({output:output})
  }

  handleRegexChange(event) {
    this.setState({regex: event.target.value});
    let output
    try {
      output = (this.state.text).match(RegExp(event.target.value,'g'))
    }
    catch(err) {
      output = "Error"
    }
    this.setState({output: output})
  }

  render() {
    return(
      <div>
        <div><CreateHeader /></div>
        <div className="leftbox">
          <CreateTextbox text={this.state.text} handleTextChange={this.handleTextChange} />
        </div>
        <div className="rightbox">
          <CreateRegexbox regex={this.state.regex} handleRegexChange={this.handleRegexChange}/><br/>
          <CreateOutputbox output={this.state.output} />
        </div>
      </div>
    )
  }
}

export default App;
