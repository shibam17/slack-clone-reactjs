import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import SidebarOption from './SidebarOption'
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from '@material-ui/icons'
import db from './firebase'

function Sidebar() {

    const [channels, setChannels] = useState([]);
    useEffect(() =>{
        db.collection('rooms').onSnapshot(snapshot =>
            setChannels(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
    )
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Shibam's Slack</h2>
                    <h3>
                    <FiberManualRecordIcon />
                    Shibam Dhar
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="thread" />
            <SidebarOption Icon={Inbox} title="Mention and reaction" />
            <SidebarOption Icon={Drafts} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel" />
            <SidebarOption Icon={PeopleAlt} title="User" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="file" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMore} title="channel-2" />
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />


            {/* add db */}
            {/* sidebar options */}
            {channels.map(channel =>(
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
