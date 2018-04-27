import { connect } from 'react-redux';
import InviteSearchBar from './invite_search_bar';
import { fetchSearchInvites } from './../../actions/invite_actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchInvites: ({fname,lname})=>dispatch(fetchSearchInvites({fname,lname}))
});

export default connect(mapStateToProps,mapDispatchToProps)(InviteSearchBar);
