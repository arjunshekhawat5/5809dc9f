import './UpdateAll.css'

const UpdateAll = ({ updateAllClickHandler, archiveTab }) => {
    const buttonInfo = archiveTab
        ? 'Unarchive All Activities'
        : 'Archive All Activities'
    return (
        <div className='update-all-container'>
            <button className='update-all-button' onClick={updateAllClickHandler}>{buttonInfo}</button>
        </div>
    )
}

export default UpdateAll