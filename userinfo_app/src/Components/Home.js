import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Home() {
    const users = useSelector(state => state.users);
    console.log(users);

    return (
        <div className='container'>
            <h2>CRUD APP WITH JSON SERVER</h2>
            <Link to='/Adduser' className="btn btn-success my-3">Add User</Link>
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

                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-sm btn-success'>Edit</button>
                                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
