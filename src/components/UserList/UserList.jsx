import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './../UserForm/UserForm';
import CustomModal from '../CustomModal/CustomModal';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [editingUserId, setEditingUserId] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone is invalid';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
                setUsers([...users, response.data]);
                setFormData({ name: '', email: '', phone: '' });
                setShowAddModal(false);
                setFormErrors({});
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleEdit = (user) => {
        setEditingUserId(user.id);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone
        });
        setShowEditModal(true);
        setFormErrors({});
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUserId}`, formData);
                const updatedUsers = users.map(user => {
                    if (user.id === editingUserId) {
                        return { ...user, ...formData };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                setFormData({ name: '', email: '', phone: '' });
                setEditingUserId(null);
                setShowEditModal(false);
                setFormErrors({});
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
            setShowDeleteModal(false);

            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-2">
            <section className="content">
                <div className="container-fluid">
                    <h1>Users Crud</h1>

                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-primary mb-2 open-modal-btn" data-toggle="modal" data-target="#addModal"
                                onClick={() => setShowAddModal(true)}

                            >
                                Add user
                            </button>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>

                                                <button className="btn btn-warning btn-sm mr-2" data-toggle="modal" data-target="#editModal"
                                                    onClick={() => handleEdit(user)}>
                                                    <i className="fas fa-edit"></i>

                                                </button>
                                                <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal"
                                                    onClick={() => {
                                                        setEditingUserId(user.id);
                                                        setShowDeleteModal(true);
                                                    }}>
                                                    <i className="fas fa-trash"></i>

                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Create Modal */}

                    <CustomModal
                        show={showAddModal}
                        onHide={() => setShowAddModal(false)}
                        title="Add User"
                    >
                        <UserForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleCreate}
                            formErrors={formErrors}
                        />
                    </CustomModal>
                    {/* Edit Modal */}
                    <CustomModal
                        show={showEditModal}
                        onHide={() => setShowEditModal(false)}
                        title="Edit User"
                    >
                        <UserForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleUpdate}
                            formErrors={formErrors}
                        />
                    </CustomModal>

                    {/* Delete Modal */}
                    <div className={`modal ${showDeleteModal ? 'show' : ''}`} id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden={!showDeleteModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="deleteModalLabel">Delete User</h5>
                                    <button type="button" className="close" aria-label="Close" onClick={() => setShowDeleteModal(false)}>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete this user?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(editingUserId)}>
                                        Delete
                                    </button>

                                    <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    >Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
};
export default UserList;
