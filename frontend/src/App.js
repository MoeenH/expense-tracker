import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Login from './Components/Form/LoginForm'; // Import your Login component

function App() {
  const [active, setActive] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Orb />
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
              {(() => {
                switch (active) {
                  case 1:
                    return <Dashboard />;
                  case 2:
                    return <Dashboard />;
                  case 3:
                    return <Income />;
                  case 4:
                    return <Expenses />;
                  default:
                    return <Dashboard />;
                }
              })()}
            </main>
          </MainLayout>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
