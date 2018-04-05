import { connect } from 'react-redux';
import InviteIndex from './invite_index';
import { fetchInvites } from './../../actions/invite_actions';

const mapStateToProps = (state) =>({
  invites: state.entities.invites
});

const mapDispatchToProps = (dispatch) => ({
  fetchInvites: ()=>dispatch(fetchInvites())
});

export default connect(mapStateToProps,mapDispatchToProps)(InviteIndex);
