import React, { useState } from 'react';
import { shaOfFearGuide } from './modules/shaOfFear';
import { leiShiGuide } from './modules/leiShi';
import { jinrokhGuide } from './modules/jinrokh';
import GuideModule from './components/GuideModule/GuideModule';
import GuideNav from './components/GuideNav/GuideNav';
import DesktopLayout from './components/Layout/DesktopLayout';

const guides = [shaOfFearGuide, leiShiGuide, jinrokhGuide];

function App() {
  const [currentGuide, setCurrentGuide] = useState(guides[0]);

  return (
    <DesktopLayout
      sidebar={
        <GuideNav
          guides={guides}
          currentGuide={currentGuide}
          onSelect={setCurrentGuide}
        />
      }
    >
      <GuideModule guide={currentGuide} />
    </DesktopLayout>
  );
}

export default App;
