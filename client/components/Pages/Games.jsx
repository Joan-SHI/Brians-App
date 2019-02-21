import React from 'react'
import { connect } from 'react-redux'

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          game: 'Please select a game below'
        }
        this.handleClick=this.handleClick.bind(this)
this.saveButton=this.saveButton.bind(this)
    }

handleClick(event){
        this.setState({
            game: 'You have selected: ' + event.target.name
        })
    }
  
    saveButton(){
        alert(this.state.game)
        //i would remove the alert here and save their choice into the database
    }


render()  {
    return(
        <div className="container">

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Games for {this.props.state.auth.user.user_name}</h4>}
    <p>{this.state.game}</p>

    <div className="columns">

<div className="column">
<figure class="image is-128x128">
<img name="Khan Academy Kids" id="game" onClick={this.handleClick} src="https://tinyurl.com/y42ztevv" />
</figure>
Khan Academy Kids
</div>

<div className="column">
<figure class="image is-128x128">
<img name="Duolingo" id="game" onClick={this.handleClick} src="https://tinyurl.com/yxz8lx5d" />
</figure>
Duolingo
</div>
</div>

<div className="columns">
<div className="column">
<figure class="image is-128x128">
<img name="ROBLOX" id="game" onClick={this.handleClick} src="https://tinyurl.com/y4qzmgoj" />
</figure>
ROBLOX
</div>

<div className="column">
<figure class="image is-128x128">
<img name="Minecraft" id="game" onClick={this.handleClick} src="https://tinyurl.com/yxn7p6nd" />
</figure>
Minecraft
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
        GamesForm: data => {
            return dispatch(GamesForm(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Games)














