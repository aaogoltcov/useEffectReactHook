import {useEffect, useState} from "react";

const userInfo = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

export default function Detail(props) {
    const {userId} = props;
    const [user, setUser] = useState({
        avatar: "",
        name: "",
        details: {
            city: "",
            company: "",
            position: "",
        }
    });
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        setLoading(true);
        if (userId) {
            const request = async () => {
                setLoading(false);
                const response = await fetch(userInfo + userId + ".json")
                    .then(response => response.json())
                setUser(response);
                setLoading(false);
            }
            const timeOut = setTimeout(request, 5000);
            return () => clearTimeout(timeOut);
        }
    }, [userId])

    return (
        <div className="card-body w-25">
            {isLoading && userId && <div className="loader"/>}
            {!isLoading && userId && <div className="card w-25">
                <img className="card-img-top" src={user.avatar} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.details.city}</li>
                    <li className="list-group-item">{user.details.company}</li>
                    <li className="list-group-item">{user.details.position}</li>
                </ul>
            </div>}
        </div>

    )
}