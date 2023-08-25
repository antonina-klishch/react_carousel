import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[],
  itemWidth: number,
  frameSize: number,
  step: number,
  animationDuration: number,
  infinite: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const {
      images,
      itemWidth,
      frameSize,
      step,
      animationDuration,
      infinite,
    } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>
        <form method="post" className="App__form">

          <label htmlFor="itemId" className="itemWidth">
            ITEM WIDTH:
            <input
              id="itemId"
              type="number"
              name="width"
              value={itemWidth}
              min={130}
              max={1300}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                  itemWidth: +event.target.value,
                });
              }}
            />
          </label>
          <br />
          <label htmlFor="frameId" className="frameSize">
            FRAME SIZE:
            <input
              id="frameId"
              type="number"
              name="frameSize"
              value={frameSize}
              min={1}
              max={10}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                  frameSize: +event.target.value,
                });
              }}
            />
          </label>

          <br />
          <label htmlFor="stepId" className="itemWidth">
            STEP:
            <input
              id="stepId"
              type="number"
              name="step"
              value={step}
              min={1}
              max={10}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                  step: +event.target.value,
                });
              }}
            />
          </label>

          <br />
          <label htmlFor="durationId" className="itemWidth">
            ANIMATION DURATION:
            <input
              id="durationId"
              type="number"
              name="duration"
              value={animationDuration}
              min={100}
              max={100000}
              step={100}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                  animationDuration: +event.target.value,
                });
              }}
            />
          </label>

          <br />
          <label htmlFor="infiniteId" className="itemWidth">
            INFINITE
            <input
              type="checkbox"
              id="infiniteId"
              name="step"
              onClick={() => {
                this.setState({
                  infinite: !infinite,
                });
              }}
            />
          </label>
        </form>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
