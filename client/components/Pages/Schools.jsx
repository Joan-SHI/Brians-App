import React from 'react'
import { connect } from 'react-redux'

class Schools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

  






render()  {
    return(
        <div>

          {this.props.auth.isAuthenticated && 
        <h4 className="title is-2">Schools for {this.props.state.auth.user.user_name}</h4>}
    
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














