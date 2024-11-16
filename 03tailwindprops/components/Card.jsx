import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({username, btnTxt = "Visit Me"}) => {
    console.log("props", username)
  return (
    <StyledWrapper>
      <div className="card">
        <p className="card-title">{username}</p>
        <p className="small-desc">
            A computer science student. Currently in 7th semester. Learning ReactJs, having well knowledge in backend and SQL and NoSQL databases.
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        <button className='mt-10'>{btnTxt}</button>
      </div>
    </StyledWrapper>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  btnTxt: PropTypes.string
};

const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    max-width: 300px;
    max-height: 320px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }

  .card button {
    background: linear-gradient(135deg, #6293c8, #384c6c);
    color: white;
    border: none;
    padding: 0.8em 1.5em;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .card button:hover {
    opacity: 0.9;
  }
`;

export default Card;
