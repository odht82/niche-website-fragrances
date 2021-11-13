import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
    const { rating } = props;
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label
                        type="radio"
                        name="rating"
                        value={ratingValue}
                    >
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                            size={24}
                        ></FaStar>
                    </label>
                )
            })}
        </div>
    );
};

export default Rating;

    // const [rating, setRating] = useState(null);
    // const [hover, setHover] = useState(null);
    // return (
    //     <div>
    //         {[...Array(5)].map((star, i) => {
    //             const ratingValue = i + 1;
    //             return (
    //                 <label
    //                     type="radio"
    //                     name="rating"
    //                     value={ratingValue}
    //                 onClick={() => setRating(ratingValue)}
    //                 >
    //                     <FaStar
    //                         className="star"
    //                         color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
    //                         size={24}
    //                     onMouseEnter={() => setHover(ratingValue)}
    //                     onMouseLeave={() => setHover(null)}
    //                     ></FaStar>
    //                 </label>
    //             )
    //         })}
    //     </div>
    // );