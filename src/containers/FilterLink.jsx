import { connect } from 'react-redux';
import { setTodoListFilter } from '../redux/actions';
import Button from '../components/Button/Button';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.todoListFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setTodoListFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
