import React from 'react'
import { connect } from 'react-redux'

class Schools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: 'Please select a school below' 
        }
this.handleClick=this.handleClick.bind(this)

    }

  
    handleClick(event){
        this.setState({
            school: 'You have selected: ' + event.target.name
        })
    }





render()  {
    return(
        <div>

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Schools for {this.props.state.auth.user.user_name}</h4>}
<p>{this.state.school}</p>
<div className="columns">
  <div className="column">
  <figure class="image is-128x128">
  <img name="Khandallah School"onClick={this.handleClick}src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Khandallah School
  </div>
  <div className="column">

   <figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Ngaio School
  </div>
  </div>
  <div className="columns">
  <div className="column">
  <figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    West End School
  </div>
  <div className="column">
  <figure class="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Kaori Normal School
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
        SchoolForm: data => {
            return dispatch(SchoolForm(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Schools)














