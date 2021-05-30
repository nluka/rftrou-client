import axios from 'axios';
import React, { useState } from 'react';
import Page from '../Page/Page';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/create-post', {
        title,
        body,
        token: localStorage.getItem('token'),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page title='Create New Post'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='post-title' className='text-muted mb-1'>
            <small>Title</small>
          </label>
          <input
            autoFocus
            name='title'
            id='post-title'
            className='form-control form-control-lg form-control-title'
            type='text'
            placeholder=''
            autoComplete='off'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='post-body' className='text-muted mb-1 d-block'>
            <small>Body Content</small>
          </label>
          <textarea
            name='body'
            id='post-body'
            className='body-content tall-textarea form-control'
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>

        <button className='btn btn-primary'>Save New Post</button>
      </form>
    </Page>
  );
};

export default CreatePost;