import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers, getUsersOnChangePage } from "../../redux/users-reducer";
import Users from "./Users";
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainerComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanges = (pageNumber) => {
    this.props.getUsersOnChangePage(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader />
        :
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanges={this.onPageChanges}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      }
    </>
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, getUsers, getUsersOnChangePage })(UsersContainerComponent)