import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from './Users'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (user) => {
      dispatch(setUsersAC(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)