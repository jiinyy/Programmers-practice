import logo from './logo.svg';
import PropTypes from 'prop-types';

// Logo의 size 값을 안 넘겼을경우 => default 값
function Logo({size = 100}) {
  return (
    <img src={logo}
      className="App-logo"
      alt="logo"
      style={{ width: size, height: size }}
    />
  )
}

// Logo의 size 값을 안 넘겼을경우 => default 값
// Logo.defaultProps = {
//   size: 200,
// };

// Logo props type 지정해주기 => 브라우저에는 잘 나오지만 콘솔에 타입 error 나옴
Logo.propTypes = {
  size : PropTypes.number,
};

export default Logo;

