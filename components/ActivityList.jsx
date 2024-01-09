import ActivityListItem from './ActivityListItem'
const ActivityList = ({ activities }) => {
    return (
        <div>
            <h1>Activity List</h1>
            {activities.length === 0
                ? <p>No activities to display!</p>
                : <ul>
                    {activities.map(activity => (
                        <ActivityListItem
                            key={activity.id}
                            activity={activity}
                        />
                    )
                    )}
                </ul>}
        </div>
    )
}

export default ActivityList