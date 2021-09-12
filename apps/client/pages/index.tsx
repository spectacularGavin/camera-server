import React from 'react';
import { NextPage } from 'next';

const Home: NextPage<{ data: string }> = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Security Camera Viewer</h1>
      <p>Test</p>
      <pre>{data}</pre>
    </div>
  );
};

Home.getInitialProps = ({ query }) => {
  return {
    data: `some initial props including query params and controller data: ${JSON.stringify(
      query,
      null,
      2
    )}`,
  };
};

export default Home;