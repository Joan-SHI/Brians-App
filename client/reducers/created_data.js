import {CREATED_DATA} from '../actions'

function CREATED_DATA (state = [], action) {
  switch (action.type) {
    case CREATED_DATA:
      return action.createdMessage.message

    default:
      return state
  }
}

export default CREATED_DATA