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
          <input
            type="text"
            className="form-control"
            placeholder="Number of speakers"
            name="nspeakers"
          />
          <input
            type="submit"
            value="Get me the stats!"
            className="btn btn-default"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
