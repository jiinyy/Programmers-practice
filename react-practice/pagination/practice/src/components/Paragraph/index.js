import PropTypes from 'prop-types';

function Paragraph({ children, size = 16 , color = 'white'}) {
  return (
    <p style={{ fontSize: size, color }}>
      {children}
    </p>
  )
}

// node = JSX 및 element 같은 걸 받을 수 있는 type
// isRequired =  반드시 prop을 넣어줘야한다는 뜻. 만약 App2.js 의 Paragraph 태그안에 값이 X? => error 발생
Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color : PropTypes.string
}

export default Paragraph;