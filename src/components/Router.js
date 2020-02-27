import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "routes/Home";
import TV from "routes/TV";
import Search from "routes/Search";
import Detail from "routes/Detail";

import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      {/* 기본적으로 모든 라우터를 타지만, Switch를 활용하면 오로지 하나의 라우터만 타게할 수 있다. */}
      <Switch>
        <Route path="/" exact component={Home} />
        {/* /tv/popular와 겹치지 않게 하기 위해 exact */}
        {/* <Route path="/tv" component={TV} exact  /> */}
        <Route path="/tv" component={TV} />
        {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        {/* 일치하는 라우터가 하나도 없으면 홈으로 리다이렉트 */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
