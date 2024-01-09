const Tabs = ({ tabHandler }) => {
    return (
        <div>
            <button onClick={tabHandler}>Show Activities</button>
            <button onClick={tabHandler}>Show Archived</button>
        </div>
    )
}

export default Tabs 