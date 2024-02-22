// // AddModal.js
// // AddModal.js
// import React, { useState, useEffect } from 'react';

// const AddModal = ({ onClose, onSubmit, show }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newUser = {
//             name: name,
//             email: email,
//         };
//         onSubmit(newUser);
//     };

//     useEffect(() => {
//         console.log('AddModal component mounted');
//         return () => {
//             console.log('AddModal component unmounted');
//         };
//     }, []);

//     return (
//         <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Modal with Form</h5>
//                         <button type="button" className="close" onClick={onClose}>
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <form onSubmit={handleSubmit}>
//                             {/* ... (form inputs) ... */}
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                         </form>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddModal;
// <div>
// {/* Simple Modal Example */}
// <div className="modal fade" id="testModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog" role="document">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Test Modal</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                 </button>
//             </div>
//             <div className="modal-body">
//                 This is a test modal.
//             </div>
//         </div>
//     </div>
// </div>
// {/* Button to trigger the modal */}
// <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#testModal">
//     Open Test Modal
// </button>
// </div>


