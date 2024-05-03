import BookingForm from '../../forms/BookingForm/BookingForm';
import Comment from '../CardItem/Comment/Comment';
import s from './Reviews.module.css';

const Reviews = ({ advert }) => {
  const { reviews } = advert;
  return (
    <div className={s.reviewsWrapper}>
      <ul className={s.reviewsList}>
        {reviews.map((review, index) => (
          <Comment key={index} review={review} />
        ))}
      </ul>

      <BookingForm />
    </div>
  );
};
export default Reviews;

// max-width: calc((100% -(24px* 3)) / 4);
