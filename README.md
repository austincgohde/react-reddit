# Reddit...in React/Redux!

## Getting Started:
```
git clone https://github.com/gSchool/g54-reddit-clone-redux.git
cd g54-reddit-clone-redux
npm install OR yarn
npm start OR yarn start
```
## User Stories

Feel free to Style / theme / rename the app to make it something you might put on your portfolio.

**Users can create a post**

- Users can toggle the "New Post" form
- Users can create posts
  - Each post has a title, author, image, and description
- Users cannot create a new post if any of the inputs are blank
  - Fields should only appear invalid once they've tabbed off
- Users cannot click "Create Post" until the form is valid

**Users can view posts**

- Users see the number of comments correctly pluralized
  - i.e. "0 comments" or "1 comment"
- Users see posts dynamically reorder according to number of votes
- Users see the post's date/time displayed nicely
  - i.e. "Yesterday at 3:09pm", "4 minute ago", etc.
  - You will need an [external library](https://www.npmjs.com/package/react-moment)

**Votes**

- Users can upvote
- Users can downvote
  - But not make it go lower than 0

**Filter**

- Users can filter based on the post title

**Sort**

- Users see posts ordered by votes (most first) by default
- Users can sort by Date or by Title

**Comments**

- Users can toggle comments
- Users can add comments

## Detailed Wireframes

**Posts**

Form toggle

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-form-toggle.gif?raw=true)

Validations

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-form-validations.gif?raw=true)

Creating and viewing a post

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-create-post.gif?raw=true)

**Votes**

Upvoting

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-votes.gif?raw=true)

Downvoting

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-down-votes.gif?raw=true)

**Filter**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-filter.gif?raw=true)

**Sort**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-sort.gif?raw=true)

**Comments**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-comments.gif?raw=true)
