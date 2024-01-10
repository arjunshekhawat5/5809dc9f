import ActivityListItem from './ActivityListItem'

const ActivityList = ({ activities, archiveTab, archiveClickHandler }) => {
    return (
        <div>
            <h1>{!archiveTab ? 'Activities' : 'Archive'}</h1>
            {activities.length === 0
                ? <p>No activities to display!</p>
                : <ul>
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