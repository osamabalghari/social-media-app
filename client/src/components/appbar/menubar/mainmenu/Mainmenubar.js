import React from 'react'
import Chatmenu from '../chatmenu/Chatmenu'
import Menumodal from '../menumodal/Menumodal'
import Notification from '../notification/Notification'
import Secondary from '../secondarymenu/Secondary'

const Mainmenubar = () => {
    return (
        <div class="col d-flex align-items-center justify-content-end">
            <div
                class="align-items-center justify-content-center d-none d-xl-flex"
            >
                <img
                    src="https://source.unsplash.com/collection/happy-people"
                    class="rounded-circle me-2"
                    alt="avatar"
                    style={{ width: "38px", height: "38px", objectFit: "cover" }}
                />
                <p class="m-0">John</p>
            </div>
            <Menumodal />
            <Chatmenu />
            <Notification />
            <Secondary />
        </div>
    )
}

export default Mainmenubar