import React, { useState } from "react";

const PostForm = ({ formData, setFormData, handleChange, handleSubmit }) => {
  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Autore del post
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Autore del post"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titolo del post
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Titolo del post"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Testo del post
              </label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                name="body"
                value={formData.body}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="public"
            name="public"
            checked={formData.public}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="public">
            Post pubblicato
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {formData.public ? (
            <>
              <i className="fa-solid fa-upload"></i> Pubblica articolo
            </>
          ) : (
            <>
              <i className="fa-solid fa-floppy-disk"></i> Salva bozza
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
