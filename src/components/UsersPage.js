import React, { Component } from 'react';


class UsersPage extends Component {
  constructor() {
	super();
	this.state = { users:[] };
  }

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
	function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    var error = new Error(response.statusText);
	    error.response = response;
	    throw error;
	  }
	}
	fetch('/api/users')
      .then(checkStatus)
      .then(response => response.json())
      .then(data => {
        this.setState(data);})
      .catch(err => {
        console.log('request failed', err);
      });
  }

  render() {
	const users = this.state.users.map((data, id) => {
	  const ref = "#/users/" + (id + 1).toString();
	  return (<li key={id}><a href={ref}>User {id + 1}</a></li>);
	});
    return (
      <div>Users
	    {users}
      </div>
    );
  }
}

export default UsersPage;
