import React from 'react'
import { connect } from 'react-redux'
//import { MainForm } from '../actions/MainForm'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: '',
            school: '',
            friend: '',
            game: '',
            shop: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        const data = {
            planet,
            school,
            friend,
            game,
            shop
        }

        this.props.MainForm(data)
    }






render()  {
    return(
        <div>

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Welcome {this.props.state.auth.user.user_name}</h4>}
    <form className="form box" >
        <hr />
        {/* {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>} */}

        {/* <label className="label is-large has-text-centered">Add Planet to live
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="Planet" type="text" onChange={this.handleChange} name="planet" onChange={this.updateDetails} />
        </label>

        <label className="label is-large has-text-centered">Add School to study
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="School" type="text" onChange={this.handleChange} name="school" onChange={this.updateDetails} />
        </label>

        <label className="label is-large has-text-centered">Choose Friends
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="friend" type="text" onChange={this.handleChange} name="friend" onChange={this.updateDetails} />
        </label>

        <label className="label is-large has-text-centered">Choose Games
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="game" type="text" onChange={this.handleChange} name="game" onChange={this.updateDetails} />
        </label>

        <label className="label is-large has-text-centered">Add Shops
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="shop" type="text" onChange={this.handleChange} name="shop" onChange={this.updateDetails} />
        </label> */}
        <input className="button is-large is-fullwidth is-success" value='Start' type="submit" onClick={this.handleClick} />
    </form>
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


export default connect(mapStateToProps, mapDispathToProps)(Main)














