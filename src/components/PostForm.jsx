import React from "react";

const PostForm = () => {
  return (
    <div className="row">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="postAuthor" className="form-label">
                Autore del post
              </label>
              <input
                type="text"
                className="form-control"
                id="postAuthor"
                placeholder="Autore del post"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label for="postTitle" className="form-label">
                Titolo del post
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                placeholder="Titolo del post"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="mb-3">
              <label for="postBody" class="form-label">
                Testo del post
              </label>
              <textarea class="form-control" id="postBody" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="postPublic" />
          <label className="form-check-label" for="postPublic">
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
