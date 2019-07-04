import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import users from '../api/users';

const User = (props) => {
  if (props.valueType === 'address') {
    return (
      <div>
        {
          users
            .find((person) => person['id'] === props.userId)
            ['address']['city']
        }
      </div>
    );
  }
  return (
    <div>
      {
        users
          .find((person) => person['id'] === props.userId)
          [props.valueType]
      }
    </div>
  );
};

User.propTypes = {
  valueType: PropTypes.string.isRequired
};

export default User;