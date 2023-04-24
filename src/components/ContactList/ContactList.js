import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number }, index) => (
      <li className={s.item} key={index}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
