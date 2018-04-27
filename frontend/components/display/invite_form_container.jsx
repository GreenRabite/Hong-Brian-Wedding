import { connect } from 'react-redux';
import InviteForm from './invite_form';
import { fetchInvites } from './../../actions/invite_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    invites: state.entities.invites
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInvites: ()=>dispatch(fetchInvites())
});

export default connect(mapStateToProps,mapDispatchToProps)(InviteForm);
