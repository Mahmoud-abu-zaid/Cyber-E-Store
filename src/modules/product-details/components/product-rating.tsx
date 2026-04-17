import { FaStar, FaStarHalf } from "react-icons/fa";

export default function ProductRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      <div className="flex text-yellow-400 text-lg">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`}><FaStar /></span>
        ))}

        {hasHalfStar && <span className="text-yellow-400"><FaStarHalf /></span>}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300"><FaStar /></span>
        ))}
      </div>
    </div>
  );
}