import React, { useContext, useState } from 'react';
import { AppContext } from "../context/Context.jsx";


export default function Post({ post }) {
  const { currentUser } = useContext(AppContext);

  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);
  const [views, setViews] = useState(post.views);

  return (
    <div className="post" style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px auto',
      width: '400px',
      fontFamily: '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    }}>
        
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={post.avatar} alt="avatar" style={{ borderRadius: '50%', width: '40px', marginRight: '10px' }} />
        <div>
          <strong>{post.name}</strong> <span style={{ color: 'gray' }}>{post.username}</span>
          <div style={{ fontSize: '12px', color: 'gray' }}>{post.date}</div>
        </div>
      </div>
      <p>{post.text}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '14px' }}>
        <span onClick={() => setViews(views + 1)} style={{ cursor: 'pointer' }}>👀 {views} views</span>
        <span onClick={() => setComments(comments + 1)} style={{ cursor: 'pointer' }}>💬 {comments}</span>
        <span onClick={() => setLikes(likes + 1)} style={{ cursor: 'pointer' }}>❤️ {likes}</span>
        <span onClick={() => setShares(shares + 1)} style={{ cursor: 'pointer' }}>🔗 {shares}</span>
      </div>

      {/* Aquí usas currentUser */}
      <div style={{ marginTop: '10px', fontSize: '12px', color: 'gray' }}>
        <strong>{currentUser.name}</strong>, has visto este post.
      </div>
    </div>
  );
}
