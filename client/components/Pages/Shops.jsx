import React from 'react'
import { connect } from 'react-redux'
//import { MainForm } from '../actions/MainForm'

class Shops extends React.Component {
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
        <h4 className="title is-2">Shops for {this.props.state.auth.user.user_name}</h4>}
    
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


export default connect(mapStateToProps, mapDispathToProps)(Shops)














