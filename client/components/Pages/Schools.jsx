import React from 'react'
import { connect } from 'react-redux'

class Schools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: 'Please select a school below' 
        }
this.handleClick=this.handleClick.bind(this)
this.saveButton=this.saveButton.bind(this)

 }

    handleClick(event){
        this.setState({
            school: 'You have selected: ' + event.target.name
        })
    }

    saveButton(){
        alert(this.state.school)
        //i would remove the alert here and save their choice into the database
    }




render()  {
    return(
        <div className="container">

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Schools for {this.props.state.auth.user.user_name}</h4>}
<p>{this.state.school}</p>

<div className="columns">

  <div className="column">
  <figure class="image is-128x128">
  <img name="Khandallah School" id="school" onClick={this.handleClick} src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Khandallah School
  </div>

  <div className="column">
<figure class="image is-128x128">
  <img name="Ngaio School" id="school" onClick={this.handleClick} src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Ngaio School
  </div>
  </div>

  <div className="columns">
  <div className="column">
  <figure class="image is-128x128">
  <img name="West End School" id="school" onClick={this.handleClick} src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    West End School
  </div>

  <div className="column">
  <figure class="image is-128x128">
  <img name="Kaori Normal School" id="school" onClick={this.handleClick} src="https://bulma.io/images/placeholders/128x128.png" />
</figure>
    Kaori Normal School
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
        SchoolForm: data => {
            return dispatch(SchoolForm(data));
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Schools)














