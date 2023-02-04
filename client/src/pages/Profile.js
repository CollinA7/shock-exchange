import React from 'react';

function Profile() {
  return (
    <div>
      <form action="/stats" encType="multipart/form-data" method="post">
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            name="uploaded_file"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
