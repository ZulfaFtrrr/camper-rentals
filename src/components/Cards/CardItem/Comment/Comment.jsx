import Icon from '../../../Icon/Icon';
import s from './Comment.module.css';

const Comment = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;
  const avatarFirstLetter = name.split('')[0].toUpperCase();

  let counter = 0;

  return (
    <div className={s.commentContainer}>
      <div className={s.commentBox}>
        <span className={s.avatar}>{avatarFirstLetter}</span>

        <div className={s.nameStarsWrapper}>
          <p className={s.nameText}>{name}</p>
          <div className={s.starsWrapper}>
            {[...Array(5)].map((star, index) => {
              counter++;

              return (
                <li key={index}>
                  <Icon
                    id={'star'}
                    fill={counter <= rating ? '#ffc531' : '#F2F4F7'}
                    stroke={counter <= rating ? '#ffc531' : '#F2F4F7'}
                    size="20"
                  />
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <p className={s.commentText}>{comment}</p>
    </div>
  );
};
export default Comment;
