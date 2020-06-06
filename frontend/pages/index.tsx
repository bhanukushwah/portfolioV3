import { Component } from 'react'

export class index extends Component {
  handleClick = () => {
    if(document.documentElement.getAttribute('data-theme') == 'light'){
      document.documentElement.setAttribute('data-theme', 'dark')
    } else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  render() {
    return (
      <div>
        Hello world!
        <button onClick={this.handleClick}>toggle</button>
      </div>
    )
  }
}

export default index
  