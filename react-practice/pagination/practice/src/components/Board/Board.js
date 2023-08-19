import PropTypes from 'prop-types'

const Board = ({ articles }) => {
  return(
    <div>
      <h1> Board </h1>

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {article.id} | {article.title} | {article.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

Board.propTypes = {
  articles : PropTypes.array
}

export default Board