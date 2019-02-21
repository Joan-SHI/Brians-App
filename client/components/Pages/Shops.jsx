import React from 'react'
import { connect } from 'react-redux'

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: 'Please select a shop below' 
        }
this.handleClick=this.handleClick.bind(this)
this.saveButton=this.saveButton.bind(this)

 }

    handleClick(event){
        this.setState({
            shop: 'You have selected: ' + event.target.name
        })
    }

    saveButton(){
        alert(this.state.shop)
        //i would remove the alert here and save their choice into the database
    }

render()  {
    return(
        <div className="container">

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Shops for {this.props.state.auth.user.user_name}</h4>}
<p>{this.state.shop}</p>

<div className="columns">

  <div className="column">
  <figure class="image is-128x128">
  <img name="Toy World" id="shop" onClick={this.handleClick} src="https://tinyurl.com/yxkofeg8" />
<p> Toy World</p>
</figure>
  </div>

  <div className="column">
<figure class="image is-128x128">
  <img name="Whitcoulls" id="shop" onClick={this.handleClick} src="https://tinyurl.com/yyrfkxoa" />
  <p> Whitcoulls</p>
</figure>
    
  </div>
  </div>

  <div className="columns">
  <div className="column">
  <figure class="image is-128x128">
  <img name="New World" id="shop" onClick={this.handleClick} src="https://tinyurl.com/y2ourl5k" />
  <p>New World</p>
</figure> 
  </div>

  <div className="column">
  <figure class="image is-128x128">
  <img name="St Pierre's Sushi" id="shop" onClick={this.handleClick} src="https://tinyurl.com/y5zx73bl" />
  <p>St Pierre's Sushi</p>
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
        ShopForm: data => {
            return dispatch(ShopForm(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Shops)














