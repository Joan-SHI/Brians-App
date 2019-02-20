import React from 'react'
import { connect } from 'react-redux'


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
friend: 'Please select a friend below'
        }
        this.handleClick = this.handleClick.bind(this)
        this.saveButton = this.saveButton.bind(this)
    }

  handleClick(e){
      this.setState({
          friend: 'You have selected:' + e.target.name
      })
  }

saveButton(){
    //i would remove the alert here and save their choice into the database
    alert(this.state.friend)
}


render()  {
    return(
        <div className="container">

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Friends for {this.props.state.auth.user.user_name}</h4>}

<div id="planetsRowOne" className="columns">
  <div className="column">
  <figure className="image is-128x128">
  <img name="Elise" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y4jvwudx"/>
  <p>Elise</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Nate" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y4mmwfw2"/>
  <p>Nate</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Charlie" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y67zgjo7"/>
  <p>Charlie</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Brian" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y5vynwqb"/>
  <p>Brian</p>
</figure>
  </div>
</div>

<div id="planetsRowTwo" className="columns">
  <div className="column">
  <figure className="image is-128x128">
  <img name="Ben" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y6laqnbw"/>
  <p>Ben</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Sienna" onClick={this.handleClick} id="friend" className="is-rounded" src="https://i.gifer.com/PVDZ.gif"/>
  <p>Sienna</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Addi" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y46mkn5h"/>
  <p>Addi</p>
</figure>
  </div>
  <div className="column">
  <figure className="image is-128x128">
  <img name="Natasha" onClick={this.handleClick} id="friend" className="is-rounded" src="https://tinyurl.com/y5wpjgww"/> 
  <p>Natasha</p>
</figure>
  </div>
</div>
<button className="button is-link" onClick={this.saveButton}>Save your choice</button>
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
        FriendsForm: data => {
            return dispatch(Friends(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Friends)














