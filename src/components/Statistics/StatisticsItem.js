import PropTypes from 'prop-types';

function StatisticsItem({ label, percentage }) {
    return (
        <li>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>

    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;