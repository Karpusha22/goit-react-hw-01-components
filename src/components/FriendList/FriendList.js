import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, id, isOnline }) => (
      <li className={styles.item} key={id}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;