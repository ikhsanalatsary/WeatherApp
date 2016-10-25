import React from 'react';
import { Link, IndexLink } from 'react-router';

const LinkContainer = ({ children, to, onlyActiveOnIndex }, { router }) => {
  const isActive = router.isActive(to, onlyActiveOnIndex);
  const LinkComponent = onlyActiveOnIndex ? IndexLink : Link;
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <LinkComponent to={to}>{children}</LinkComponent>
    </li>
  );
}

LinkContainer.propTypes = {
  children: React.PropTypes.node,
  to: React.PropTypes.string,
  onlyActiveOnIndex: React.PropTypes.bool
}

LinkContainer.contextTypes = {
  router: React.PropTypes.object
};

export default LinkContainer;
