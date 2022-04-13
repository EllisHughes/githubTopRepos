import React from 'react';
const dayjs = require('dayjs');
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

const repoCard = ({ repoData }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <h2 id="repoName">
          <a href={repoData.html_url} target="_blank" rel="noreferrer">
            {repoData.full_name}
          </a>
        </h2>
        <h4 id="repoDescription">{repoData.description}</h4>
        <span className="dateStarsSpan">
          <h5>Created: {dayjs(repoData.created_at).format('Do MMMM YYYY')}</h5>
          <h5>★ {repoData.stargazers_count}</h5>
        </span>
      </div>
    </div>
  );
};
export default repoCard;
