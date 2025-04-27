import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ProjectHead from './ProjectHead';
import ProjectMenu from './ProjectMenu';
import SkillMenu from './SkillMenu';

const ProjectMain = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="services mt-[50px] pt-25 text-white " id='portofolio'>
      <ProjectHead index={index} setIndex={setIndex} />

      <div className="mt-10">
        <SwipeableViews
          index={index}
          onChangeIndex={(i) => setIndex(i)}
          enableMouseEvents
          animateTransitions
          springConfig={{
            duration: '0.6s',
            easeFunction: 'ease-in-out',
            delay: '0s'
          }}
        >
          <div><ProjectMenu /></div>
          <div><SkillMenu /></div>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default ProjectMain;
