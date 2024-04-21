function Review({ data }) {
    return (
        <div id="review-list">
            Reviews:
            {data?.map((rev, index) => (
                <div key={index} id="review">
                    <p style={{'fontStyle': 'italic'}}>{rev.author}:</p> 
                    <p>{rev.review}</p>
                    {/* <p>Rating: {rev.rating}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Review;