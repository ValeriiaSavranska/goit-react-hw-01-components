import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
