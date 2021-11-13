import React, { useEffect, useState } from 'react';
import { Alert, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { Box } from '@mui/system';
import Rating from './Rating/Rating';
import useAuth from '../../../../hooks/useAuth';

const Reviews = () => {
    const { token } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [successdeleting, setSuccessdeleting] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [id, setId] = useState('');

    const handleDelete = (id) => {
        setLoading(true);
        setId(id);
        handleRemoveOrder(id)
    }

    useEffect(() => {
        const url = "https://fragrance-shop.herokuapp.com/reviews"
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    const handleRemoveOrder = (id) => {
        fetch(`https://fragrance-shop.herokuapp.com/reviews/${id}`, {
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
    return (
        <div>

            <h2>Reviews: {reviews.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="left">Qoute</TableCell>
                            <TableCell align="center">Rating</TableCell>
                            <TableCell align="center">Reviewer</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reviews.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box height="50px" width="80px"><img height="100%" style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={row.avatar} alt="" /></Box>
                                </TableCell>
                                <TableCell align="left">{row.qoute}</TableCell>
                                <TableCell align="center">
                                    <Rating key={row._id} rating={row.rating}></Rating></TableCell>
                                <TableCell align="center">{row.revieweruser}</TableCell>
                                <TableCell align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                {successdeleting && <Alert style={{ marginTop: '20px', marginBottom: '20px' }} severity="error">{id} successfully Deleted!</Alert>}
            </div>
        </div >
    );
};

export default Reviews;