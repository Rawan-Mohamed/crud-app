import React from 'react';

const UserForm = ({ formData, handleInputChange, handleSubmit, handleCancel, formErrors }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="modal-body">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {formErrors.name && <span className="text-danger">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {formErrors.phone && <span className="text-danger">{formErrors.phone}</span>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-dismiss="modal">
                    Submit
                </button>
                {/* <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancel}
                >
                    Cancel
                </button> */}
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            </div>
        </form>
    );
};

export default UserForm;
