import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserModelCard from '../components/UserModelCard'
import { getUserModels, getUserModelById } from '../redux/actions'

class UserModels extends Component {
    componentDidMount(){
        let searchedId = this.props.match.params.id
        if(searchedId){
            this.props.getUserModelById(searchedId)
        }
        else{
            this.props.getUserModels()
        }
      }

      render(){
        let mappedUserModels
        if(this.props.match.params.id){
            if(this.props.searchedUserModel.length === 0){
                mappedUserModels = <h1>ID does not exist!</h1>
            }
            else{
                mappedUserModels = this.props.searchedUserModel.map(userModel => <UserModelCard userModel={userModel} key={userModel.id} />)
            }
        }
        else{
            mappedUserModels = this.props.allUserModels.map(userModel => <UserModelCard userModel={userModel} key={userModel.id} />)
        }
        return(
            <div>
                {mappedUserModels}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      getUserModels: () => dispatch(getUserModels()),
      getUserModelById: (id) => dispatch(getUserModelById(id))
    }
  }

const mapStateToProps = (state) => {
    return{
      allUserModels: state.allUserModels,
      searchedUserModel: state.searchedUserModel
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps) (UserModels);