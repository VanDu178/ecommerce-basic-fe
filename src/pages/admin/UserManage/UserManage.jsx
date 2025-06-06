import React, { useState } from "react";
import "./UserManage.css";

const initialUsers = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0123456789" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", phone: "0987654321" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com", phone: "0933222111" },
];

const UserManage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [editRowId, setEditRowId] = useState(null);
    const [editUser, setEditUser] = useState({});

    const handleEdit = (user) => {
        setEditRowId(user.id);
        setEditUser({ ...user });
    };

    const handleCancel = () => {
        setEditRowId(null);
        setEditUser({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setUsers((prev) =>
            prev.map((user) => (user.id === editRowId ? editUser : user))
        );
        setEditRowId(null);
        setEditUser({});
    };

    return (
        <div className="table-container">
            <h2>Quản lý tài khoản</h2>
            <table>
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>
                        editRowId === user.id ? (
                            <tr key={user.id}>
                                <td>
                                    <input
                                        name="name"
                                        value={editUser.name}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="email"
                                        value={editUser.email}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="phone"
                                        value={editUser.phone}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <button className="btn save" onClick={handleSave}>
                                        Lưu
                                    </button>
                                    <button className="btn cancel" onClick={handleCancel}>
                                        Hủy
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className="btn edit" onClick={() => handleEdit(user)}>
                                        Chỉnh sửa
                                    </button>
                                    <button className="btn lock" onClick={() => handleEdit(user)}>
                                        Khóa
                                    </button>
                                    <button className="btn unlock" onClick={() => handleEdit(user)}>
                                        Mở Khóa
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserManage;
