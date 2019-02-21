import React from 'react'
import { connect } from 'react-redux'

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          planet: 'Please select a planet below'
        }
        this.handleClick = this.handleClick.bind(this)
        this.saveButton=this.saveButton.bind(this)
    }

handleClick(event){
    this.setState({
        planet: 'You have selected: ' + event.target.name
    })
}

saveButton(){
   //i would remove the alert here and save their choice into the database
  alert(this.state.planet)
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
  <img name="Mercury" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/keoyt3k"/>
  <p>Mercury</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Mars" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/y9zh5tan"/>
  <p>Mars</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Earth" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/y7ct6z6j"/>
  <p>Earth</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Saturn" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/y3ad8nx8"/>
  <p>Saturn</p>
</figure>
  </div>
</div>

<div id="planetsRowTwo" className="columns">
  <div className="column">
  <figure className="image is-128x128">
  <img name="Jupiter" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/pzpn76p"/>
  <p>Jupiter</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Venus" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/y8pvt65j"/>
  <p>Venus</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Uranus" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/y536v4jt"/>
  <p>Uranus</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Neptune" onClick={this.handleClick} id="planet" className="is-rounded" src="https://tinyurl.com/ydhdfk67"/> <p>Neptune</p>
</figure>
  </div>
</div>
<button className="button is-link" onClick={this.saveButton}>Choose your choice</button>
    </div>

    )
}
}

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














