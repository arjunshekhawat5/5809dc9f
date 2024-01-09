const ActivityListItem = ({ id, activity }) => {
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
            <h3>{callInfo}</h3>
            <p>Duration: {activity.duration} seconds, {activity.direction} </p>
        </li>
    )
}

export default ActivityListItem