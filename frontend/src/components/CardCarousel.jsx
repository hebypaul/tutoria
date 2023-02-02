import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card';

export default class extends React.Component {
  render() {
    return (
<div className="container mx-auto p-5">
<CarouselProvider
       naturalSlideWidth={100}
       naturalSlideHeight={125}
       totalSlides={5}
       visibleSlides={4}
     >

<Slider>
<Slide index={0}>
    <Card />
</Slide>
<Slide index={1}>
    <Card />
</Slide>
<Slide index={2}>
    <Card />
</Slide>
<Slide index={3}>
    <Card />
</Slide>
<Slide index={4}>
    <Card />
</Slide>
</Slider>
<div className="flex ">
<div className=" mx-auto mt-5">
<ButtonBack className="  text-gray-900 bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
</ButtonBack>
<ButtonNext className="  text-gray-900 bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
</ButtonNext>
</div>
</div>

</CarouselProvider>
</div>
    );
  }
}