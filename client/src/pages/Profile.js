import React from 'react';

function Profile() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div>
      <img src="./images/stock-user.jpg" className="prof-pic" />
      <form action="/profile/photo" encType="multipart/form-data" method="post">
        <div className="form-group">
          <input type="file" className="form-control-file" name="avatar" />
        </div>
        <button type="submit" onSubmit={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
