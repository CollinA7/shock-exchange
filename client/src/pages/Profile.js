import React from 'react';
import Image from 'react-bootstrap/Image';

function Profile() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Image src="./images/stock-user.jpg" className="rounded" alt="prof-pic" />
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
