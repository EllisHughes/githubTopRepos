import React, { useEffect, useState } from 'react';
import axiosCall from './githubAPI';
import RepoCard from './repoCard';

const GithubComponent = () => {
  const [githubResult, setGithubResult] = useState([]);
  useEffect(() => {
    axiosCall().then((data) => setGithubResult(data.data.items));
  }, []);
  return (
    <div className="componentContainer">
      <h1 id="title">Most Stars: Javascript</h1>
      <div className="githubComponent">
        {githubResult.map((x) => (
          <RepoCard key={x.id} repoData={x} />
        ))}
      </div>
    </div>
  );
};
export default GithubComponent;
