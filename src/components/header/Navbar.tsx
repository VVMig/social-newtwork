import React from 'react'
import { HomeRounded, PeopleAltRounded, ForumRounded, FlagRounded, SettingsRounded } from '@material-ui/icons'

import PageIcon from './PageIcon'

import './Navbar.css'

interface Icon {
    title: string,
    iconComponent: any
}

const icons: Icon[] = [
    {
    title: 'Home',
    iconComponent: <HomeRounded/>
    },
    {
        title: 'Groups',
        iconComponent: <PeopleAltRounded/>
    },
    {
        title: 'Messager',
        iconComponent: <ForumRounded/>
    },
    {
        title: 'Help',
        iconComponent: <FlagRounded/>
    },
    {
        title: 'Settings',
        iconComponent: <SettingsRounded/>
    }
]

const Navbar: React.FC = () => {
    return <div className="pages-container">
            {icons.map((e, i) => <PageIcon icon={e.iconComponent}/>)}
        </div>
}

export default Navbar;