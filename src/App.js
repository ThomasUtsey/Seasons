import React from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'
import './app.css'
class App extends React.Component{

  state = {
      lat:null,
      err:''
  }

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat:position.coords.latitude}),
        (err) => this.setState({err:err.message})
    )

  }

  componentDidUpdate(){
    console.log('component did update')
  }

  renderContent = () =>{
    if(this.state.lat){
      return(<div>
       <SeasonDisplay
      lat = {this.state.lat}
      />
       </div>)
    }else if(this.state.err !== ''){
      return <Spinner
                message ={'Permision to retrieve location has been denied please authorize location retrieval by refreshing the page and selecting allow in the prompt'} 
      />
    }else{
      return <Spinner
              message = {'Awaiting permision to retrieve your location'}
      />
    }
  }

  render(){
    return(
      <div>{this.renderContent()}</div>
    )
   
  }
}

export default App