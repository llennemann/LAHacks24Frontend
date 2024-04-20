function Review({ data }) {
    console.log('in review now')
    console.log(data)

    return (
        <div id="review-list">
            {data?.map((rev, index) => (
                <div key={index} id="review">
                    <p>Name: </p>
                    <p>{rev.review_text}</p>
                    <p>Rating: {rev.rating}</p>
                </div>
            ))}
        </div>
    )
}

export default Review;