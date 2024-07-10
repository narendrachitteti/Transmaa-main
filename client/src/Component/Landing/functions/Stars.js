import React from "react";
import { IoIosStarHalf } from "react-icons/io";

const Stars = ({ rating }) => {
  const starCount = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<IoIosStarHalf key="half" className="text-warning" />);
    }

    const remainingStars = starCount - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Stars;
