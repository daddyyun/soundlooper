import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeadNav } from './HeadNav';
import { Welcome } from './Welcome';
import SoundLooper from './soundLooper/SoundLooper';
import DrawSound from './drawSound/DrawSound';

export const Main = () => {
  return (
    <div>
    <div>
      <HeadNav />
    </div>
    <div>
      <Switch>
        <Route path="/soundLooper" component={SoundLooper} />
        <Route path="/drawSound" component={DrawSound} />
        <Route component={Welcome} />
      </Switch>
    </div>
  </div>
  )
}

