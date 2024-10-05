import PropTypes from 'prop-types';
import PostCard from './PostCard';
import './PostGrid.css'; // 스타일 정의 추가

const PostGrid = ({ searchQuery, posts }) => {
  return (
    <div className="post-grid-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      ) : (
        <p></p> // 검색 결과가 없을 때 공백 표시
      )}
    </div>
  );
};

PostGrid.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostGrid;
