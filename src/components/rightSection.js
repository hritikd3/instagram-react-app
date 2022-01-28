import React from 'react';

export default function RightSection() {
  return (
    <>
      {/* <div className="wrapper"> */}
        <section className="main">
          <div className="right-col">
            <div className="profile-card">
              <div className="profile-pic">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  />
                  </div>
              <div>
                <p className="username">mevidyutjammwal</p>
                <p className="sub-text">Vidyut Jammwal</p>
              </div>
              <button className="action-btn">Switch</button>
            </div>
            <p className="suggestion-text">Suggestions for you</p>
            <div className="profile-card">
              <div className="profile-pic">
                <img src="img/cover 5.png" alt="" />
              </div>
              <div>
                <p className="username">callme_vickykaushal</p>
                <p className="sub-text">Followed by shahrukh_1</p>
              </div>
              <button className="action-btn">Follow</button>
            </div>
            <div className="profile-card">
              <div className="profile-pic">
                <img src="img/cover 3.png" alt="" />
              </div>
              <div>
                <p className="username">i_amsunny_23</p>
                <p className="sub-text">New to Instagram</p>
              </div>
              <button className="action-btn">Follow</button>
            </div>
            <div className="profile-card">
              <div className="profile-pic">
                <img src="img/cover 2.png" alt="" />
              </div>
              <div>
                <p className="username">pearl_on_floor</p>
                <p className="sub-text">New to Instagram</p>
              </div>
              <button className="action-btn">Follow</button>
            </div>
            <div className="profile-card">
              <div className="profile-pic">
                <img src="img/cover 9.png" alt="" />
              </div>
              <div>
                <p className="username">nitya_1212singh</p>
                <p className="sub-text">Followed by 23_rock</p>
              </div>
              <button className="action-btn">Follow</button>
            </div>
          </div>
        </section>{" "}
      {/* </div> */}
    </>
  );
}
