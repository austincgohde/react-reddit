import React, { Component } from 'react'

class PostCompose extends Component {

  state = {
    title: "",
    author: "",
    image: "",
    description: ""
  }

  handleFormChanges = (e) => {
    if(e.target.id === "title") {
      this.setState({ title: e.target.value })
    } else if(e.target.id === "author") {
      this.setState({ author: e.target.value })
    } else if(e.target.id === "image-url") {
      this.setState({ image: e.target.value })
    } else if(e.target.id === "body") {
      this.setState({ description: e.target.value })
    }
  }

  render () {

    let isFormValid = this.state.title !== ""
                   && this.state.author !== ""
                   && this.state.image !== ""
                   && this.state.description !== "" ? "" : "disabled"

    return (
      <div className="row">
        <div className="col-md-8">
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                className="form-control"
                value={this.state.title}
                onChange={this.handleFormChanges}
                />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                className="form-control"
                value={this.state.description}
                onChange={this.handleFormChanges}
                ></textarea>
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                className="form-control"
                value={this.state.author}
                onChange={this.handleFormChanges}
                />
            </div>
            <div>
              <label htmlFor="image-url">Image URL</label>
              <input
                id="image-url"
                className="form-control"
                value={this.state.image}
                onChange={this.handleFormChanges}
                />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isFormValid}
                >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PostCompose
