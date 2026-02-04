import { NavLink, useLocation } from 'react-router-dom';
import { Person } from '../types';
import classNames from 'classnames';

export const PersonLink = ({ person }: { person: Person }) => {
  const location = useLocation();

  if (!person) {
    return null;
  }

  return (
    <NavLink
      to={`/people${location.search}/${person.slug}`}
      className={classNames({ 'has-text-danger': person.sex === 'f' })}
    >
      {person.name}
    </NavLink>
  );
};
