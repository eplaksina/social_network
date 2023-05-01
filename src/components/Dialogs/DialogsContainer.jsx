import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose(
	connect(mapStateToProps, { sendMessage, updateNewMessageBody }),
	withAuthRedirect
)(Dialogs);