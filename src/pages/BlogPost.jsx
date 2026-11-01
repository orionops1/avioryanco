import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { fetchPost } from '../services/wordpress'
import './BlogPost.css'

export default function BlogPost() {
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(() => fetchPost(id), [id])

  if (loading) return <div className="loading">Loading post...</div>
  if (error) return <div className="error">Error loading post: {error.message}</div>
  if (!post) return <div className="error">Post not found</div>

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name

  return (
    <div className="blog-post">
      <article className="post-article">
        <div className="post-header">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          
          <h1>{post.title.rendered}</h1>
          
          <div className="post-meta">
            <span className="post-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            {author && <span className="post-author">by {author}</span>}
            <span className="post-reading-time">5 min read</span>
          </div>
        </div>

        {featuredImage && (
          <img 
            src={featuredImage} 
            alt={post.title.rendered}
            className="featured-image"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        )}

        <div 
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="post-footer">
          <div className="post-categories">
            <h4>Categories:</h4>
            <ul>
              {post._embedded?.['wp:term']?.[0]?.map((cat) => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <aside className="post-sidebar">
        <div className="sidebar-widget">
          <h3>Related Posts</h3>
          <p>Other jewelry insights and tips coming soon...</p>
        </div>
      </aside>
    </div>
  )
}
