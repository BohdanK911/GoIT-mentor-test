import PropTypes from 'prop-types';

const StarIcon = ({ fill = '#ffc22b', className }) => (
  <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 29 30'} className={className}>
    <path
      fill={fill}
      d={
        'M27.4 10.23l-7.88-.82c-.5-.05-.93-.4-1.13-.93L15.56.93a1.31 1.31 0 00-2.51 0l-2.8 7.55c-.19.53-.64.88-1.13.93l-7.9.82c-1.17.12-1.65 1.74-.76 2.61L6.4 18.6c.39.37.54.92.43 1.47l-1.78 8.07c-.28 1.27.97 2.32 2 1.65l6.59-4.26c.43-.28.95-.28 1.38 0l6.58 4.26c1.04.67 2.28-.35 2-1.65l-1.76-8.07c-.1-.55.05-1.1.43-1.47l5.95-5.76c.86-.87.36-2.49-.81-2.61z'
      }
    />
  </svg>
);

StarIcon.propTypes = {
  fill: PropTypes.string
};

export default StarIcon;
