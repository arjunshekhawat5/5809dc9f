import './ActivityListItem.css'

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
            <div className='activity-item'>
                <div className='activity-info'>
                    <div className='info-heading'>
                        {callInfo}
                    </div>
                    <div className='activity-detail'>
                        Duration: {activity.duration} seconds, {activity.direction}
                    </div>
                </div>
                <div className='archive-button'>
                    <button onClick={archiveClickHandler}>{archiveTab ? 'Unarchive activity' : 'Archive activity'}</button>
                </div>
            </div>
        </li>
    )
}

export default ActivityListItem