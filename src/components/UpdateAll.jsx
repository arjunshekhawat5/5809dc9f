const UpdateAll = ({ updateAllClickHandler, archiveTab }) => {
    const buttonInfo = archiveTab
        ? 'Unarchive All Activities'
        : 'Archive All Activities'
    return (
        <div>
            <button onClick={updateAllClickHandler}>{buttonInfo}</button>
        </div>
    )
}

export default UpdateAll