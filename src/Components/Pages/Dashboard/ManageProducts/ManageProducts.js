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
import WifiProtectedSetupTwoToneIcon from '@mui/icons-material/WifiProtectedSetupTwoTone';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert } from '@mui/material';

const ManageProducts = () => {
    const { token } = useAuth();
    const [products, setProducts] = useState([]);
    const [successdeleting, setSuccessdeleting] = useState(false);
    const [id, setId] = useState('');
    const [loading, setLoading] = React.useState(false);

    const handleDelete = (id) => {
        setLoading(true);
        setId(id);
        handleRemoveOrder(id)
    }

    useEffect(() => {
        const url = `https://fragrance-shop.herokuapp.com/products`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [token]);
    console.log(products);

    const handleRemoveOrder = (id) => {
        const proceed = window.confirm(`Are you sure, to Delete this product ${id} ?`);
        if (proceed) {
            fetch(`https://fragrance-shop.herokuapp.com/products/${id}`, {
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
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box height="50px" width="80px"><img height="100%" style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={row.image} alt="" /></Box>
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">
                                    <LoadingButton
                                        color="success"
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<WifiProtectedSetupTwoToneIcon />}
                                        variant="contained"
                                    >
                                        Update
                                    </LoadingButton>
                                    <LoadingButton
                                        color="error"
                                        onClick={handleDelete}
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<DeleteForeverTwoToneIcon />}
                                        variant="contained"
                                        style={{ marginLeft: '20px' }}
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
                {successdeleting && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">{id} successfully Deleted!</Alert>}
            </div>
        </div >
    );
};

export default ManageProducts;