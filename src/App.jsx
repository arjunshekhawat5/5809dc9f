import { useEffect, useState } from 'react'
import activityService from '../services/activity'
import ActivityList from '../components/ActivityList'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    console.log('App.js useEffect()')
    getActivities()
  }, [])


  const getActivities = () => {
    activityService
      .getAllActivities()
      .then(allActivities => {
        console.log(allActivities)
        setActivities(allActivities)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      Hello World!
      <ActivityList activities={activities} />
    </div>
  )
}

export default App
