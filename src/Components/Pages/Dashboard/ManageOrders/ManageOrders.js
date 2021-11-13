/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import useAuth from './../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import { Alert } from '@mui/material';
import PendingActionsTwoToneIcon from '@mui/icons-material/PendingActionsTwoTone';


const ManageOrders = () => {
    const { token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState('');
    const [successshipping, setSuccessshipping] = useState(false);
    const [successpending, setSuccesspending] = useState(false);
    const [successdeleting, setSuccessdeleting] = useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleShipping = (productName, email) => {
        setLoading(true);
        setId(productName);
        handleShippingupdate(productName, email)
        setSuccesspending(false)
        setSuccessdeleting(false)
    }
    const handlePending = (productName, email) => {
        setLoading(true);
        setId(productName);
        handlePendingupdate(productName, email)
        setSuccessdeleting(false)
        setSuccessshipping(false)
    }

    const handleDelete = (id) => {
        setLoading(true);
        setId(id);
        handleRemoveOrder(id)
        setSuccessshipping(false)
        setSuccesspending(false)
    }


    useEffect(() => {
        const url = `https://fragrance-shop.herokuapp.com/orders`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [token, id, orders])
    console.log(orders);

    const handleShippingupdate = (productName, email) => {
        const productId = { productName, email };
        fetch(`https://fragrance-shop.herokuapp.com/orders/shipped`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(productId)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccessshipping(true);
                    setLoading(false);
                }
            })
    }

    const handlePendingupdate = (productName, email) => {
        const productId = { productName, email };
        fetch(`https://fragrance-shop.herokuapp.com/orders/pending`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(productId)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccesspending(true);
                    setLoading(false);
                }
            })
    }

    const handleRemoveOrder = (id) => {
        fetch(`https://fragrance-shop.herokuapp.com/orders/${id}`, {
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
    }


    let sum = 0;
    return (
        <div>
            <h2>Orders: {orders.length}</h2>
            {orders.map(row => { let price = parseInt(row.productPrice); sum += price })}
            <h2> Total orders price: ${sum}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Orderer</TableCell>
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
                                <TableCell align="center">{row.orderer}</TableCell>
                                <TableCell align="center">{row.orderStatus}</TableCell>
                                <TableCell align="center">{row.productPrice}</TableCell>
                                <TableCell align="center">
                                    {row.orderStatus === 'pending' ? <LoadingButton
                                        color="success"
                                        onClick={() => { handleShipping(row.productName, row.orderer) }}
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<LocalShippingTwoToneIcon />}
                                        variant="contained"
                                        style={{ marginRight: '20px' }}
                                    >
                                        Shipped
                                    </LoadingButton> :
                                        <LoadingButton
                                            color="warning"
                                            onClick={() => { handlePending(row.productName, row.orderer) }}
                                            loading={loading}
                                            loadingPosition="start"
                                            startIcon={<PendingActionsTwoToneIcon />}
                                            variant="contained"
                                            style={{ marginRight: '20px' }}
                                        >
                                            Pending
                                        </LoadingButton>}
                                    <LoadingButton
                                        color="error"
                                        onClick={() => { handleDelete(row._id) }}
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<DeleteForeverTwoToneIcon />}
                                        variant="contained"
                                    >
                                        Delete
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                {successshipping && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="success">{id} successfully changed to Shipping!</Alert>
                }
            </div>
            <div>
                {successpending && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="warning">{id} successfully changed to pending!</Alert>}
            </div>
            <div>
                {successdeleting && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">{id} successfully Deleted!</Alert>}
            </div>
        </div>
    );
};

export default ManageOrders;



// handleShippingupdate @ManageOrders.js: 61
// handleShipping @ManageOrders.js: 29
//     (anonymous)	@ManageOrders.js: 136
// ManageOrders @ManageOrders.js: 119