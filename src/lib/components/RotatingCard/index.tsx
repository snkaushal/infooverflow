import React from 'react';
import classnames from 'classnames';

interface RotatingCardProps { 
  frontSide?: any;
  backSide?: any;
 }

interface RotatingCardState { }

export default class RotatingCard extends React.Component<RotatingCardProps, RotatingCardState> {
  render() {
    const { frontSide, backSide } = this.props;
    return (
      <div className={classnames('io-rotating-card')}>
        <div className={classnames('io-rotating-card__side', 'io-rotating-card__front')}>
          {frontSide}
        </div>
        <div className={classnames('io-rotating-card__side', 'io-rotating-card__back')}>
          {backSide}
        </div>
      </div>
    )
  }
}