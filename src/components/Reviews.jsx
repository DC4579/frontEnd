import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <section className="reviews">
      <h2>Our Reviews</h2>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p>"{review.text}"</p>
            <h4>{review.name}</h4>
            <span>{"⭐".repeat(review.rating)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
