import React, { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import avatar from 'C:/Users/Faraz/Desktop/expense-tracker-SE/expense-tracker-main/frontend/src/img/Image.jpg';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';


function Navigation({ active, setActive }) {
=======
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status

  const handleSignOut = () => {
    // Perform sign-out actions here
    setIsLoggedIn(false); // Update login status to false on sign out
  };

>>>>>>> 6a27057bc0dcc38a310801062ef30e74a64e78a9
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
<<<<<<< HEAD
          <h2>Moeen</h2>
          <p>ExpenseTracker</p>
=======
          <h2>Mike</h2>
          <p>Your Money</p>
>>>>>>> 6a27057bc0dcc38a310801062ef30e74a64e78a9
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
<<<<<<< HEAD
        <SignOutButton>
          {signout} Sign Out
        </SignOutButton>
=======
        <li onClick={handleSignOut}>
          {signout} Sign Out
        </li>
>>>>>>> 6a27057bc0dcc38a310801062ef30e74a64e78a9
      </div>
    </NavStyled>
  );
}



const NavStyled = styled.nav`
<<<<<<< HEAD
  padding: 2rem 1.5rem;
  width: 374px;
  height: 900px;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #FFFFFF;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    h2 {
      color: rgba(34, 34, 96, 1);
    }

    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

const SignOutButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #ff5c5c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

=======
  /* ...existing styles */
`;

>>>>>>> 6a27057bc0dcc38a310801062ef30e74a64e78a9
export default Navigation;
