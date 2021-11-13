import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import LoadingButton from '@mui/lab/LoadingButton';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';

// qoute: "Great value, as I saw this exact frag at Boscovs for $80. Never buy re..."
// avatar: "https://raw.githubusercontent.com/odht82/fake-doctor-data/main/1.jpg"
// rating: "4"
// revieweruser: "Obaydul Hoque"
const GiveReview = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [qoute, setQoute] = useState('');
    const [avatar, setAvatar] = useState('');
    const [revieweruser, setRevieweruser] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const { user } = useAuth();

    const handleOnBlurQoute = e => {
        setQoute(e.target.value);
    }
    const handleOnBlurAvatar = e => {
        setAvatar(e.target.value);
    }

    const handlesubmit = e => {
        setLoading(true);
        const reviewinfo = {
            qoute: qoute,
            avatar: avatar,
            rating: rating,
            revieweruser: revieweruser
        }
        // console.log(reviewinfo)
        fetch('https://fragrance-shop.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewinfo)
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
            <h2>Give a Review</h2>

            <form onSubmit={handlesubmit}>
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    label="Qoute"
                    type="text"
                    onBlur={handleOnBlurQoute}
                    variant="standard" />
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    label="Avatar"
                    type="text"
                    onBlur={handleOnBlurAvatar}
                    variant="standard" />
                <div style={{ marginBottom: '40px' }}>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label
                                key={ratingValue}
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            >
                                <FaStar
                                    className="star"
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={24}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                ></FaStar>
                            </label>
                        )
                    })}
                </div>
                <TextField
                    required
                    style={{ marginBottom: '40px' }}
                    sx={{ width: '100%' }}
                    value={user.displayName}
                    type="text"
                    variant="standard"
                    disabled
                    onMouseMove={() => setRevieweruser(user.displayName)} />
                {/* <Button style={{ marginBottom: '40px' }} type="submit" variant="contained">Give Review</Button> */}
                <LoadingButton
                    color="success"
                    onClick={() => { handlesubmit() }}
                    type='submit'
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<StarsTwoToneIcon />}
                    variant="contained"
                >
                    Add Review
                </LoadingButton>
            </form>
            {success && <Alert style={{ marginTop: '40px' }} severity="success">Review Added successfully!</Alert>}
        </div>
    );
};

export default GiveReview;


// const [email, setEmail] = useState('');
// const [success, setSuccess] = useState(false);
// const { token } = useAuth();

// const handleOnBlur = e => {
//     setEmail(e.target.value);
// }
// const handleAdminSubmit = e => {
//     const user = { email };
//     fetch('https://stark-caverns-04377.herokuapp.com/users/admin', {
//         method: 'PUT',
//         headers: {
//             'authorization': `Bearer ${token}`,
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(res => res.json())
//         .then(data => {
//             if (data.modifiedCount) {
//                 console.log(data);
//                 setSuccess(true);
//             }
//         })

//     e.preventDefault()
// }
// return (
//     <div>
//         <h2>Make an Admin</h2>
//         <form onSubmit={handleAdminSubmit}>
//             <TextField
//                 sx={{ width: '50%' }}
//                 label="Email"
//                 type="email"
//                 onBlur={handleOnBlur}
//                 variant="standard" />
//             <Button type="submit" variant="contained">Make Admin</Button>
//         </form>
//         {success && <Alert severity="success">Made Admin successfully!</Alert>}
//     </div>
// );
// };