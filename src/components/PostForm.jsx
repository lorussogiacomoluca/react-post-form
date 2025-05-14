import React, { useState } from "react";

const PostForm = ({ formData, setFormData }) => {
  return (
    <div className="row">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="postAuthor" className="form-label">
                Autore del post
              </label>
              <input
                type="text"
                className="form-control"
                id="postAuthor"
                placeholder="Autore del post"
                name="postAuthor"
                value={formData.postAuthor}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">
                Titolo del post
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                placeholder="Titolo del post"
                name="postTitle"
                value={formData.postTitle}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="postBody" className="form-label">
                Testo del post
              </label>
              <textarea
                className="form-control"
                id="postBody"
                rows="3"
                name="postBody"
                value={formData.postBody}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="postPublic"
            name="postPublic"
            checked={formData.postPublic}
          />
          <label className="form-check-label" htmlFor="postPublic">
            Post pubblicato
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Pubblica/bozza
        </button>
      </form>
    </div>
  );
};

export default PostForm;
