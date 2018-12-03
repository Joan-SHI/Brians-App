import React from 'react'
import { connect } from 'react-redux'

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

  






render()  {
    return(
        <div>

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Planets for {this.props.state.auth.user.user_name}</h4>}
    
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














