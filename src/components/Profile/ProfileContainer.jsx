import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouther } from '../common/withRouther/withRouther';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 2
		}

		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

export default compose(
	connect(mapStateToProps, { getUserProfile }),
	withRouther,
	withAuthRedirect
)(ProfileContainer);
