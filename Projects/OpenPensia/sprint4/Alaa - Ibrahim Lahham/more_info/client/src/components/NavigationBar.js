
import './NavigationBar.css'

function NavigationBar(props) {
    return (
        <nav className='all-tabs'>
            <ul>
                {props.navTabs.map((tab, index) => {
                    return (
                        <li key={index} className={tab.className}>
                            <a href={tab.href}>  </a> {tab.content}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavigationBar;