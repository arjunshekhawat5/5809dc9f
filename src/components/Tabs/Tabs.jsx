import './Tabs.css'

const Tabs = ({ tabHandler }) => {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <button className="navigation-button" onClick={tabHandler}>
                        Show Activities
                    </button>
                </li>
                <li className="navigation-item">
                    <button className="navigation-button" onClick={tabHandler}>
                        Show Archived
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Tabs 