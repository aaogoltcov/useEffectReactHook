import {useEffect, useState} from "react";

const usersURL = ' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

export default function List(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {getUserInfoHandle} = props;

    useEffect( () => {
        const request = async () => {
            const response = await fetch(usersURL)
                .then(response => response.json())
            setUsers(response);
            setLoading(false);
        }
        const timeOut = setTimeout(request, 5000);
        return () => clearTimeout(timeOut);
    }, []);

    return <ul className="w-25 list-group list-group-flush">
        {isLoading && <div className="loader"/>}
        {users.map(user => {
            return (<li key={user.id} className="list-group-item">
                {user.name}
                <a id={user.id} onClick={getUserInfoHandle} className="stretched-link text-decoration-none text-dark" href="#"/>
            </li>)
        })}
    </ul>;
}