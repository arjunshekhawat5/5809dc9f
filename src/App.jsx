import { useEffect, useState } from 'react'
import activityService from './services/activity'
import ActivityList from './components/ActivityList'
import Tabs from './components/Tabs'
import UpdateAll from './components/UpdateAll'

function App() {
  const [activities, setActivities] = useState([])
  const [archiveTab, setArchiveTab] = useState(false)

  //get all activities from the API for the first render
  useEffect(() => {
    console.log('App.js useEffect()')
    getActivities()
  }, [])

  //reference call object to filter bad data
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

  //function to filter bad data with missing fields
  const validActivity = (activity) => {
    const activityFields = Object.keys(activity)
    //console.log(activityFields, referenceActivityFields)
    return (
      activityFields.length === referenceActivityFields.length &&
      activityFields.every(field => referenceActivityFields.includes(field))
    )
  }

  //get all activities from the API
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

  //update the archive status of an activity based on the current tab
  const updateArchiveStatus = (id, activity) => {
    console.log('updating activity...', id)
    const updatedActivity = { ...activity, is_archived: !archiveTab }
    activityService
      .updateActivity(id, updatedActivity)
      .then(updatedActivity => {
        console.log('updated activity successfully....', updatedActivity)
        getActivities()
      })
      .catch(error => {
        console.error(error)
      })
  }

  //update archive status of all activities
  const updateArchiveStatusAll = (updatedActivities) => {
    for (const activity of updatedActivities) {
      setTimeout(() => updateArchiveStatus(activity.id, activity), 10)
    }
  }

  //onClick handler for archive button/ unarchive button
  const archiveHandler = (id, activity) => {
    updateArchiveStatus(id, activity)
  }

  //onClick handler for archive all/ unarchive all button
  const archiveAllHandler = () => {
    console.log('updating all activities...')
    const updatedActivities = activities.map(activity => ({ ...activity, is_archived: !archiveTab }))
    updateArchiveStatusAll(updatedActivities)
  }

  //onclick handler for tabs (show activities/ show archived) button
  const tabHandler = (event) => {
    //console.log('tabHandler', event.target.textContent)
    const isArchiveTab = event.target.textContent === 'Show Archived'
    setArchiveTab(isArchiveTab)
  }

  //filtering activities to show based on the tab status
  const activitiesToShow = activities.filter(activity => archiveTab ? activity.is_archived : !activity.is_archived)

  return (
    <div>
      <Tabs tabHandler={tabHandler} />
      <UpdateAll updateAllClickHandler={() => { archiveAllHandler(activities) }} archiveTab={archiveTab} />
      <ActivityList activities={activitiesToShow} archiveTab={archiveTab} archiveClickHandler={archiveHandler} />
    </div>
  )
}

export default App
