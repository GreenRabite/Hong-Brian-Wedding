import { connect } from 'react-redux';
import InviteForm from './invite_form';
import { fetchInvite, updateInvite } from './../../actions/invite_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    invite: state.entities.invites[ownProps.match.params.inviteId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInvite: (id)=>dispatch(fetchInvite(id)),
  updateInvite: (invite)=>dispatch(updateInvite(invite))

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(InviteForm));
