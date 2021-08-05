import PropTypes from 'prop-types';

const PersonIcon = ({ fill = '#6e798c', className }) => (
  <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} className={className}>
    <defs />
    <path
      fill={fill}
      d={
        'M11.96 13.82a6.3 6.3 0 006.42-6.17c0-3.41-2.87-6.16-6.42-6.16a6.3 6.3 0 00-6.42 6.16 6.31 6.31 0 006.42 6.17zm0-10.72c2.6 0 4.73 2.05 4.73 4.55s-2.13 4.54-4.73 4.54a4.65 4.65 0 01-4.73-4.54c0-2.5 2.13-4.55 4.73-4.55zM.85 23.45h22.3c.48 0 .85-.36.85-.81 0-4.26-3.6-7.74-8.06-7.74H8.06C3.63 14.9 0 18.36 0 22.64c0 .45.37.81.85.81zm7.2-6.93h7.9c3.22 0 5.88 2.31 6.3 5.3H1.75a6.3 6.3 0 016.3-5.3z'
      }
    />
  </svg>
);

PersonIcon.propTypes = {
  fill: PropTypes.string
};

export default PersonIcon;
