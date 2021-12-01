import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    let color;
    if (isOnline) {
        color = '#008000';
    } else {
        color = '#ff0000';
    }

    return (
        <li className={s.item}>
            <span className={s.status} style={{ backgroundColor: `${color}` }}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li >
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;