import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeadNav } from './HeadNav';
import { Welcome } from './Welcome';
import GameOfLife from './gameOfLife/GameOfLife';
import MakeYourNoise from './makeYourNoise/MakeYourNoise';
import Example from './Example'

export const Main = () => {
  return (
    <div>
    <div>
      <HeadNav />
      <Example />
    </div>
    <div>
      <Switch>
        <Route path="/gameOfLife" component={GameOfLife} />
        <Route path="/makeYourNoise" component={MakeYourNoise} />
        <Route component={Welcome} />
      </Switch>
    </div>
  </div>
  )
}

