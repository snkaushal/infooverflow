import React from 'react';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';
import RotatingCard from '../../../lib/components/RotatingCard';

interface LandingProps { }

interface LandingState { }

export default class Landing extends React.Component<LandingProps, LandingState> {
  frontSideOfCard = (
    <div>
      <i className={classnames('fa', 'fa-camera-retro', 'io-landing__card-icon')} />
      <br />
      Category
    </div>
  )

  backSideOfCard = (
    <div>
      Category Description
    </div>
  )
  render() {
    return (
      <div className={classnames('io-landing')}>
        <header className={classnames('io-landing__header')}>
          <div className={classnames('io-landing__header-text')}>
            <span>Have a question?</span>
            <span>You are at the right place</span>
          </div>
        </header>
        <main>
          <div className={classnames('io-landing__section-one')}>
            <h1 className={classnames('io-heading-primary')}>
              You can ask a question in the following categories
            </h1>
            <div className={classnames('io-landing__section-one-categories', 'io-row')}>
              <RotatingCard frontSide={this.frontSideOfCard} backSide={this.backSideOfCard} />
              <RotatingCard frontSide={this.frontSideOfCard} backSide={this.backSideOfCard} />
              <RotatingCard frontSide={this.frontSideOfCard} backSide={this.backSideOfCard} />
              <RotatingCard frontSide={this.frontSideOfCard} backSide={this.backSideOfCard} />
            </div>
          </div>
        </main>
        {/* <Link to="/notlanding">Non Landing</Link> */}
      </div>
    )
  }
}