const ActivityListItem = ({ id, activity, archiveTab, archiveClickHandler }) => {
    let callInfo = ''

    if (activity.call_type === 'missed') {
        callInfo = `${activity.to} missed call from ${activity.from}`
    } else if (activity.call_type === 'answered') {
        callInfo = `${activity.from} answered call from ${activity.to}`
    } else {
        callInfo = `${activity.to} has voicemail from ${activity.from}`
    }

    return (
        <li key={id}>
            <h4>{callInfo}</h4>
            <p>Duration: {activity.duration} seconds, {activity.direction}</p>
            <button onClick={archiveClickHandler}>{archiveTab ? 'Unarchive activity' : 'Archive activity'}</button>
        </li>
    )
}

export default ActivityListItem