import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.clicka = this.clicka.bind(this)
  }

  clicka() {
    console.log(this)
  }

  render () {   
    return <button onClick={this.clicka}>MEU BOTAO</button>
  }
}

export default App;
