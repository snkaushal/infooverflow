import React from 'react';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';
import RotatingCard from '../../../lib/components/RotatingCard';

// Mock Data
const categories = [
  {
    category: 'Design',
    icon: 'fa-paint-brush',
    description: 'Design is a work process which has a user perspective and ' +
      'drives development based on your specific customers needs'
  },
  {
    category: 'Programming',
    icon: 'fa-code',
    description: 'Programming is the process of taking an algorithm and encoding it into a notation, ' +
      'a programming language, so that it can be executed by a computer'
  },
  {
    category: 'GK',
    icon: 'fa-book',
    description: 'General Knowledge is knowledge of a broad range of facts about various subjects.'
  },
  {
    category: 'Marketing',
    icon: 'fa-pie-chart',
    description: 'Marketing the action or business of promoting and ' +
      'selling products or services, including market research and advertising.'
  },
  {
    category: 'Politics',
    icon: 'fa-handshake-o',
    description: 'Politics is the activities associated with the governance of ' +
      'a country or area, especially the debate between parties having power.'
  }
];

interface LandingProps { }

interface LandingState { }

export default class Landing extends React.Component<LandingProps, LandingState> {
  frontSideOfCard = (icon: string, category: string) => (
    <div>
      <i className={classnames('fa', `${icon}`, 'io-landing__card-icon')} />
      <br /><br />
      <h3>{category}</h3>
    </div>
  )


  backSideOfCard = (description: string) => (
    <div>
      {description}
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
          <div className={classnames('io-landing__section-one', 'io-marg--center', 'io-lg-pad--bottom')}>
            <h1 className={classnames('io-heading-primary')}>
              You can ask a question in the following categories
            </h1>
            <div className={classnames('io-landing__section-one-categories', 'io-row', 'io-sl-pad--bottom')}>
              {categories.map(({ category, icon, description }) => (
                <RotatingCard
                  frontSide={this.frontSideOfCard(icon, category)}
                  backSide={this.backSideOfCard(description)} />
              ))}
            </div>
          </div>
          <div className={classnames('io-landing__section-two', 'io-sl-marg--vert')}>
            <div className={classnames('io-landing__quotation-container', 'io-lg-marg--vert', 'io-md-pad')}>
              <figure className={classnames('io-landing__quotation-image', 'io-md-marg--right')}>

              </figure>
              <figcaption>
                This has to be reverted.
                Withholding information is the essence of tyranny.
                Control of the flow of information is the tool of the dictatorship.
              </figcaption>
            </div>
            <div className={classnames('io-landing__quotation-container', 'io-lg-marg--vert', 'io-md-pad')}>
              <figure className={classnames('io-landing__quotation-image', 'io-md-marg--right')}>

              </figure>
              <figcaption>
                Withholding information is the essence of tyranny.
                Control of the flow of information is the tool of the dictatorship.
                </figcaption>
            </div>
          </div>
        </main>
        {/* <Link to="/notlanding">Non Landing</Link> */}
      </div>
    )
  }
}