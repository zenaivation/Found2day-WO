import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from 'shards-react';

const UserDetails = function({ userDetails, inviteMember }) {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={userDetails.photo}
            alt={userDetails.name}
            width="110"
          />
        </div>
        <h4 className="mb-0">{userDetails.name}</h4>
        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
        <Button pill outline size="sm" className="mb-2" onClick={inviteMember}>
          <i className="material-icons mr-1">person_add</i> Invite member
        </Button>
      </CardHeader>
      {/* <ListGroup flush>
        <ListGroupItem className="p-4">
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </ListGroupItem>
      </ListGroup> */}
    </Card>
  );
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
  inviteMember: PropTypes.func
};

UserDetails.defaultProps = {
  userDetails: {
    name: 'Sierra Brooks',
    avatar: require('./../../images/avatars/0.jpg'),
    jobTitle: 'Project Manager',
    performanceReportTitle: 'Workload',
    performanceReportValue: 74,
    metaTitle: 'Description',
    metaValue:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?'
  }
};

export default UserDetails;
