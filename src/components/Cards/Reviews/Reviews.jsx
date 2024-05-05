import Comment from '../CardItem/Comment/Comment';
import s from './Reviews.module.css';

const Reviews = ({ advert }) => {
  const { reviews } = advert;
  return (
    <ul className={s.reviewsList}>
      {reviews.map((review, index) => (
        <Comment key={index} review={review} />
      ))}
    </ul>
  );
};
export default Reviews;

{
}
