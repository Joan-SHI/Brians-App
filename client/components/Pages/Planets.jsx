import React from 'react'
import { connect } from 'react-redux'

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          planet: 'Please select a planet below'
        }
        this.handleClick = this.handleClick.bind(this)
    }

  

handleClick(event){
    this.setState({
        planet: 'You have selected: ' + event.target.name
    })
}




render()  {
    return(
        <div className="container">

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Planets for {this.props.state.auth.user.user_name}</h4>}
       <p>{this.state.planet}</p>

<div id="planetsRowOne" className="columns">
  <div className="column">
  <figure className="image is-128x128">
  <img name="Mercury" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Mercury</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Mars" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Mars</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Earth" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Earth</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Saturn" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Saturn</p>
</figure>
  </div>
</div>

<div id="planetsRowTwo" className="columns">
  <div className="column">
  <figure className="image is-128x128">
  <img name="Jupiter" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Jupiter</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Venus" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Venus</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Uranus" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
  <p>Uranus</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Neptune" onClick={this.handleClick} id="planet" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/> <p>Neptune</p>
</figure>
  </div>
</div>
    </div>

    )
}
}

//what should I return? 
const mapStateToProps = (state) => {
    return {
state:state,
auth: state.auth 
    }
}
const mapDispathToProps = dispatch => {
    return {
        MainForm: data => {
            return dispatch(MainForm(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Planets)














