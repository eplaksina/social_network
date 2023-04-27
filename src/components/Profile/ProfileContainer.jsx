import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouther } from '../common/withRouther/withRouther';
import { profile } from '../../api/api';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;

		if (!userId) {
			userId = 2
		}

		profile.getProfile(userId)	
			.then(data => {
				this.props.setUserProfile(data);
			})
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouther(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
