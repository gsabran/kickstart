import { Component, PropTypes } from 'react';

const LoginButtons = BlazeToReact('loginButtons');

class TodoHeader extends Component {
  handleSubmit(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection
    Meteor.call('addTask', text);

    // Clear form
    event.target.text.value = '';
  }

  render() {
    let form = null;

    if (this.props.user) {
      form = (
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="text" placeholder="Type to add new tasks" />
        </form>
      );
    }

    return (
      <header>
        <h1>Todo List ({this.props.incompleteCount})</h1>

        <label className="hide-completed">
          <input type="checkbox" checked={this.props.hideCompleted} onChange={this.props.toggleHideCompleted} />
          Hide Completed Tasks
        </label>

        <LoginButtons />

        {form}
      </header>
    );
  }
}

TodoHeader.propTypes = {
  hideCompleted: PropTypes.bool,
  toggleHideCompleted: PropTypes.func.isRequired
};

export default TodoHeader;
