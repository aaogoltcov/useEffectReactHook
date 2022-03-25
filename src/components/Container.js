import {useState} from "react";
import List from "./List";
import Detail from "./Detail"

export default function Container() {
    const [userId, setUserId] = useState();

    function getUserInfoHandle(event) {
        setUserId(event.target.id)
    }

    return (
        <div className="container row m-4 g-4 flex-nowrap">
            <List getUserInfoHandle={getUserInfoHandle}/>
            <Detail userId={userId} isLoading={true} />
        </div>
    );
}