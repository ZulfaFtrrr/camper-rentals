import Icon from '../../../Icon/Icon';
import s from './Comment.module.css';

const Comment = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;
  const avatarFirstLetter = name.split('')[0].toUpperCase();

  return (
    <div className={s.commentContainer}>
      <div className={s.commentBox}>
        <span className={s.avatar}>{avatarFirstLetter}</span>

        <div className={s.nameStarsWrapper}>
          <p className={s.nameText}>{name}</p>
          <div>
            {[...Array(5)].map((star, index) => (
              <Icon id={'star'} key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className={s.commentText}>{comment}</p>
    </div>
  );
};
export default Comment;
