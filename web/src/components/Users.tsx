import React from 'react';
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
query USERS_QUERY {
    users {
        id
        name
    }
}`;

interface User {
    name: string
}

function Users() {
    const { loading, error, data } = useQuery(USERS_QUERY);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            {data.users.map((user: User) => <p>{user.name}</p>)}
        </div>
    );
}

export default Users;
