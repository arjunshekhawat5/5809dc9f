import ActivityListItem from '../ActivityListItem/ActivityListItem'
import './ActivityList.css'

const ActivityList = ({ activities, archiveTab, archiveClickHandler }) => {
    return (
        <div>
            <h1 className='activity-list-header'>{!archiveTab ? 'Activities' : 'Archive'}</h1>
            {activities.length === 0
                ? <p className='zero-activities'>No activities to display!</p>
                : <ul className='activity-list'>
                    {activities.map(activity => (
                        <ActivityListItem
                            key={activity.id}
                            activity={activity}
                            archiveTab={archiveTab}
                            archiveClickHandler={() => archiveClickHandler(activity.id, activity)}
                        />
                    )
                    )}
                </ul>}
        </div>
    )
}

export default ActivityList