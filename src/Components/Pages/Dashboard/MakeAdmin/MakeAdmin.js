import { Alert, TableRow, TableBody, TableCell, TableHead, TableContainer, Table, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AddModeratorTwoToneIcon from '@mui/icons-material/AddModeratorTwoTone';
import React, { useEffect, useState } from 'react';
import useAuth from './../../../../hooks/useAuth';

const MakeAdmin = () => {
    const { user, token } = useAuth();
    const [email, setEmail] = useState('');
    const [successadmin, setSuccessadmin] = useState(false);
    const [successmember, setSuccessmember] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = React.useState(false);
    function handleAddClick(eml) {
        setLoading(true);
        setEmail(eml);
        handleAdminSubmit(eml)
        setSuccessmember(false)
    }

    function handleRemoveClick(eml) {
        setLoading(true);
        setEmail(eml);
        handleMemberSubmit(eml)
        setSuccessadmin(false)
    }

    useEffect(() => {
        const url = `https://fragrance-shop.herokuapp.com/users`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [token, users])

    const handleAdminSubmit = (email) => {
        const proceed = window.confirm(`Are you sure, to Make Admin this ${email} ?`);
        if (proceed) {
            const user = { email };
            fetch('https://fragrance-shop.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        console.log(data);
                        setSuccessadmin(true);
                        setLoading(false);
                    }
                })
        } else {
            setLoading(false);
        }
    }

    const handleMemberSubmit = (email) => {
        const proceed = window.confirm(`Are you sure, to Make Demotion this ${email} to member ?`);
        if (proceed) {
            const user = { email };
            fetch(`https://fragrance-shop.herokuapp.com/users/member`, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        console.log(data);
                        setSuccessmember(true);
                        setLoading(false);
                    }
                })
        } else {
            setLoading(false);
        }

    }

    return (
        <div>
            <h2>Manage Users</h2>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.displayName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.role}</TableCell>
                                <TableCell align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {row.role === 'member' && <LoadingButton
                                        color="success"
                                        onClick={() => { handleAddClick(row.email) }}
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<AddModeratorTwoToneIcon />}
                                        variant="contained"
                                    >
                                        Add as Admin
                                    </LoadingButton>}
                                    {row.role === 'admin' &&
                                        (row.email === user.email ?
                                            (<LoadingButton
                                                disabled
                                                color="info"
                                                onClick={() => { handleRemoveClick(row.email) }}
                                                loading={loading}
                                                loadingPosition="start"
                                                startIcon={<AddModeratorTwoToneIcon />}
                                                variant="contained"
                                                style={{ marginLeft: '20px' }}
                                            >
                                                Remove as Admin
                                            </LoadingButton>)
                                            :
                                            (<LoadingButton
                                                color="error"
                                                onClick={() => { handleRemoveClick(row.email) }}
                                                loading={loading}
                                                loadingPosition="start"
                                                startIcon={<AddModeratorTwoToneIcon />}
                                                variant="contained"
                                                style={{ marginLeft: '20px' }}
                                            >
                                                Remove as Admin
                                            </LoadingButton>))
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                {successadmin && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="success">{email} Made Admin successfully!</Alert>
                }
            </div>
            <div>
                {successmember && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="success">{email} Made Member successfully!</Alert>}
            </div>
        </div >
    );
};

export default MakeAdmin;