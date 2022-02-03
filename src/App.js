import React from 'react';
import Container from './Layout/Container';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content'
import Widgets from './Layout/Widgets';

function App() {
  return <Container >
    <SideBar />
    <Content />
    <Widgets />
  </Container>;
}

export default App;
