import React from 'react'
import Button from './Button'


const Header = ({ title, displayAddTask, isAdd }) => {
  const onClick = e => {
    displayAddTask();
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} text={!isAdd ? 'Add' : 'Close'} />
    </header>
  );
};
Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header;