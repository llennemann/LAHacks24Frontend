function ReviewNoRating({ data }) {
    return (
        <div id="review-list">
            Reviews:
            {data?.map((rev, index) => (
                <div key={index} id="review">
                    <p style={{'fontStyle': 'italic'}}>{rev.author}:</p> 
                    <p>{rev.review}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewNoRating;