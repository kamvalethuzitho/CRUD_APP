import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
    const users = useSelector(state => state.users);
    console.log(users);

    return (
        <div className='container'>
            <h2>CRUD APP WITH JSON SERVER</h2>
            <button className="btn btn-success my-3">Add User</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Rendering user data dynamically */}
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-warning">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
