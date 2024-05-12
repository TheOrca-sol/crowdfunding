import React from 'react';
import { Card } from 'antd';

const TeamMember = ({ member }) => {
  return (
    <Card
      hoverable
      cover={<img alt={member.name} src={member.image} />}
      className="team-member-card"
    >
      <Card.Meta
        title={member.name}
        description={(
          <>
            <p>{member.title}</p>
            <p>{member.description}</p>
          </>
        )}
      />
    </Card>
  );
};

export default TeamMember;
