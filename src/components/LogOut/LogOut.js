import './LogOut.css'
import React from "react";

const LogOut = ({ handleLogOut, closeLogOutModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <button onClick={() => closeLogOutModal(false)}>X</button >
        </div>

        <div className='login'>
          <h2>Log Out</h2>

          <form>
            <input
              className='submitBtn'
              value="Log Out"
              type="submit"
              onClick={handleLogOut}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogOut;