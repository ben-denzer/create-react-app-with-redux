import React from 'react';
import {Link, Match} from 'react-router';
import Topic from './topics/Topic';

const Topics = ({ pathname, pattern }) => (
  // 5. Components rendered by a `Match` get some routing-specific
  //    props, like the portion of the parent `pattern` that was
  //    matched against the current `location.pathname`, in this case
  //    `/topics`
  <div>
    <h2>Topics</h2>
    <ul>
      {/* 6. Use the parent's matched pathname to link relatively */}
      <li><Link to={`${pathname}/rendering`} name="Rendering With React">Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    {/* 7. Render more `Match` components to get nesting naturally
           within the render lifecycle. Use the parent's matched
           pathname to nest the url.
    */}
    <Match pattern={`${pathname}/:topicId`} component={Topic}/>

    {/* 8. use the `render` prop for convenient inline rendering */}
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
)

export default Topics;