import PropTypes from 'prop-types';
import { PersonIcon, ReactIcon, StarIcon } from 'components/icons';
import styles from './RepoCard.module.css';

const RepoCard = ({ name, author, language, description, starsCount, watchersCount }) => (
  <div className={styles.repoCardContainer}>
    <div className={styles.repoCardImageWrapper}>
      <ReactIcon className={styles.repoCardImage} />
    </div>

    <div className={styles.repoCardDetails}>
      <h3 title={'Repository name'} className={styles.repoCardName}>
        {name}
      </h3>

      <p title={'Author'} className={styles.repoCardPlainText}>
        {author}
      </p>

      {language && (
        <p title={'Most used language'} className={styles.repoCardPlainText}>
          {language}
        </p>
      )}

      {description && (
        <p title={'Repository description'} className={styles.repoCardDescription}>
          {description}
        </p>
      )}
    </div>

    <div className={styles.repoCardStats}>
      <div className={styles.repoCardStatsItem}>
        <div className={styles.repoCardStatsItemIconWrapper}>
          <StarIcon className={styles.repoCardStarIcon} />
        </div>

        <p className={styles.repoCardPlainText}>
          <span className={styles.repoCardStrongText}>{starsCount}</span> stars
        </p>
      </div>

      <div className={styles.repoCardStatsItem}>
        <div className={styles.repoCardStatsItemIconWrapper}>
          <PersonIcon className={styles.repoCardPersonIcon} />
        </div>

        <p className={styles.repoCardPlainText}>
          <span className={styles.repoCardStrongText}>{watchersCount} watchers</span>
        </p>
      </div>
    </div>
  </div>
);

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
  starsCount: PropTypes.number.isRequired,
  watchersCount: PropTypes.number.isRequired
};

export default RepoCard;
