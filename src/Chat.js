import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Chat.css"
import db from './firebase';
import Message from './Message';

function Chat() {
    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([])


    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection("rooms")
        .doc("nCQo1jZhzgg6ezkiBLk7")
        .collection('messages')
        .doc("bCvIgA7wwRwFOW0qmxkj")
        // .get()
        // .then(snapshot => {
        //     snapshot.docs.forEach(doc => {
        //         console.log(doc.data)
        //     })
        //     // const values = snapshot.docs.map(doc)
        // })
        // .orderBy('timestamp')
        .onSnapshot((snapshot) => {
            console.log(snapshot.data())
        })
        // .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())))


        // .onSnapshot((snapshot) => {
        //     console.log(snapshot.docs.map((doc) => doc.data()))
        // })

// (async () => {
//     const mssgs = await db.doc(`rooms/${roomId}`).collection('messages').get()
//     console.log(mssgs.docs)
// })();

// console.log(roomMessages);

      },[roomId]);
    
    
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                <Message />
            </div>
        </div>
    )
}

export default Chat
