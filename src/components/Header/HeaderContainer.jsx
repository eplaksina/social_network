import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
/* 		this.props.toggleIsFetching(true);
 */		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true
			})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {login, id, email} = response.data.data
					this.props.setAuthUserData(id, login, email)
				}
/* 				this.props.toggleIsFetching(false);
 */			})
	}

	render() {
		return <Header {...this.props} />
	}

}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);