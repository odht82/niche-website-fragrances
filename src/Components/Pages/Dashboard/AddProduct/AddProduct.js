import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import LoadingButton from '@mui/lab/LoadingButton';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';

// name: "Miss Dior perfume"
// price: "1200"
// image: "https://raw.githubusercontent.com/odht82/fake-data-pragrences/main/per..."

const AddProduct = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const { token } = useAuth();

    const handleOnBlurName = e => {
        setName(e.target.value);
    }
    const handleOnBlurImage = e => {
        setImage(e.target.value);
    }
    const handleOnBlurPrice = e => {
        setPrice(e.target.value);
    }

    const handlesubmit = e => {
        setLoading(true);
        const productinfo = {
            name: name,
            price: price,
            image: image
        }
        console.log(productinfo)
        fetch('https://fragrance-shop.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(productinfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log(data)
                    setSuccess(true);
                    setLoading(false);
                }
            })

        // e.preventDefault();
    }
    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handlesubmit}>
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    label="Product Name"
                    type="text"
                    onBlur={handleOnBlurName}
                    variant="standard" />
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    label="Product Image Link"
                    type="text"
                    onBlur={handleOnBlurImage}
                    variant="standard" />
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    label="Price"
                    type="text"
                    variant="standard"
                    onBlur={handleOnBlurPrice} />
                <LoadingButton
                    color="success"
                    onClick={() => { handlesubmit() }}
                    type='submit'
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<StarsTwoToneIcon />}
                    variant="contained"
                >
                    Add Product
                </LoadingButton>
            </form>
            {success && <Alert style={{ marginTop: '40px' }} severity="success">Product Added successfully!</Alert>}
        </div>
    );
};

export default AddProduct;