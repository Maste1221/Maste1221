import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
function Posts() {
  const[posts,setPosts]=useState([]);
  const[loader,setLoader]=useState(true);
  useEffect(()=>{
    fetchPosts();
    console.log(posts)
  },[]);
  async function fetchPosts(){
     await fetch("http://jsonplaceholder.typicode.com/posts")
     .then(response=> response.json())
     .then(json=>setPosts(json))
     .then(setLoader(false))
  }
  return (
   <main className='posts'>
    <div className='pg-header'>
    <div className='container'></div>
<div className='row align-items-center'>
<div className='col-lg-7'>
  <h1>posts</h1>
</div> 
<div className='col-lg-5'>
<nav aria-label='breadcrumb'>
  <ol className='breadcrumb justify-content-end'>
    <li className='breadcrumb-item'>
      <Link to='/'>Home</Link>
    </li>
    <li className='breadcrumb-item active' aria-current='page'>posts</li>
  </ol>
</nav>
</div>
</div>
    </div>
{/* contents */}
<div className='container content'>
  {loader ? <div className='text-center'>Loading...</div>
  :(
    <div className='row'>
      {posts.map(post=>{
        return(
          <div className='col-sm-6' key={post.id}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
                <p className='card-text'>
                  {post.body}
                </p>
              </div>
            </div>
          </div>
        )
      })

      }
    </div>
  )
  }
</div>
   </main>
  )
}

export default Posts