/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { Alert } from '@mui/material';

const Orders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState('');
    const [successdeleting, setSuccessdeleting] = useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleDelete = (id) => {
        setLoading(true);
        setId(id);
        handleRemoveOrder(id)
    }

    useEffect(() => {
        const url = `https://fragrance-shop.herokuapp.com/orders/own?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token, orders])

    const handleRemoveOrder = (id) => {
        const proceed = window.confirm(`Are you sure, to Delete this product ${id} ?`);
        if (proceed) {
            fetch(`https://fragrance-shop.herokuapp.com/orders/own/${user.email}?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log(data);
                        setSuccessdeleting(true);
                        setLoading(false);
                    }
                })
        } else {
            setLoading(false)
        }
    }


    let sum = 0;
    return (
        <>
            <NavBar></NavBar>
            <div style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '60px 0px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '1300px', justifyContent: 'center' }}>
                    <h2>My Orders: {orders.length}</h2>
                    {orders.map(row => { let price = parseInt(row.productPrice); sum += price; })}
                    <h2> Total price: ${sum}</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appointments table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Box height="50px" width="80px"><img height="100%" style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={row.productImage} alt="" /></Box>
                                        </TableCell>
                                        <TableCell align="left">{row.productName}</TableCell>
                                        <TableCell align="center">{row.orderDate}</TableCell>
                                        <TableCell align="center">{row.orderStatus}</TableCell>
                                        <TableCell align="center">{row.productPrice}</TableCell>
                                        <TableCell align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <LoadingButton
                                                color="error"
                                                onClick={() => (handleDelete(row._id))}
                                                loading={loading}
                                                loadingPosition="start"
                                                startIcon={<CancelTwoToneIcon />}
                                                variant="contained"
                                            >
                                                Cancel
                                            </LoadingButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div>
                        {successdeleting && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">{id} successfully Deleted!</Alert>}
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Orders;