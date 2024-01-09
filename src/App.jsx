import { useEffect, useState } from 'react'
import activityService from '../services/activity'
import ActivityList from '../components/ActivityList'
import Tabs from '../components/Tabs'

function App() {
  const [activities, setActivities] = useState([])
  const [archiveTab, setArchiveTab] = useState(false)

  useEffect(() => {
    console.log('App.js useEffect()')
    getActivities()
  }, [])

  const referenceActivity = {
    "direction": "outbound",
    "from": 100000,
    "to": 200000,
    "via": 30000000,
    "duration": 0,
    "call_type": "missed",
    "is_archived": false,
    "id": "6393bb5469073dc45849ca7a",
    "created_at": "2022-12-09T22:48:52.789Z"
  }
  const referenceActivityFields = Object.keys(referenceActivity)

  const validActivity = (activity) => {
    const activityFields = Object.keys(activity)
    //console.log(activityFields, referenceActivityFields)
    return (
      activityFields.length === referenceActivityFields.length &&
      activityFields.every(field => referenceActivityFields.includes(field))
    )
  }

  const getActivities = () => {
    activityService
      .getAllActivities()
      .then(allActivities => {
        //console.log(allActivities)
        const validActivities = allActivities.filter(activity => validActivity(activity))
        //console.log(validActivities)
        setActivities(validActivities)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const archiveHandler = (id, activity) => {
    console.log('archiving activity', id, activity)
    const updatedActivity = { ...activity, is_archived: !archiveTab }
    activityService
      .updateActivity(id, updatedActivity)
      .then(updatedActivity => {
        console.log('updated activity successfully', updatedActivity)
        getActivities()
      })
      .catch(error => {
        console.error(error)
      })
  }

  const tabHandler = (event) => {
    console.log('tabHandler', event.target.textContent)
    const isArchiveTab = event.target.textContent === 'Show Archived'
    setArchiveTab(isArchiveTab)
  }

  const activitiesToShow = activities.filter(activity => archiveTab ? activity.is_archived : !activity.is_archived)
  //console.log('unarchivedActivities', unarchivedActivities)
  //console.log('archivedActivities', archivedActivities)
  return (
    <div>
      <Tabs tabHandler={tabHandler} />
      <ActivityList activities={activitiesToShow} archiveTab={archiveTab} archiveClickHandler={archiveHandler} />
    </div>
  )
}

export default App
