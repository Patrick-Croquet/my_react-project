import React from 'react';
import logo from './logo.svg';
import './App.css';

// class Hello extends React.Component {  
//   render() {  
//       return <h1>Hello {this.props.message}!</h1>;  
//   }  
// }

class Hello extends React.Component {  
      
  constructor(){  
      super();  
      this.state = {  
          message: "my friend (from state)!"  
      };  
      this.updateMessage = this.updateMessage.bind(this);  
  }

  updateMessage() {  
      this.setState({  
          message: "my friend (from changed state)!"  
      });  
  }

  render() {  
       return (  
         <div>  
           <h1>Hello {this.state.message}!</h1>  
           <button onClick={this.updateMessage}>Click me!</button>  
         </div>     
      )  
  }  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message="my friend" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
