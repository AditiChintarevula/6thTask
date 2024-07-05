import React from 'react';
import ImageGallery from './components/ImageGallery';
import './App.css';

const images = [
  { src: `${process.env.PUBLIC_URL}/images/1.jpg`, alt: 'Image 1' },
  { src: `${process.env.PUBLIC_URL}/images/2.jpg`, alt: 'Image 2' },
  { src: `${process.env.PUBLIC_URL}/images/3.jpg`, alt: 'Image 3' },
  { src: `${process.env.PUBLIC_URL}/images/4.jpg`, alt: 'Image 4' },
  { src: `${process.env.PUBLIC_URL}/images/5.jpg`, alt: 'Image 5' },
  { src: `${process.env.PUBLIC_URL}/images/6.jpg`, alt: 'Image 6' },
  { src: `${process.env.PUBLIC_URL}/images/7.jpg`, alt: 'Image 7' },
  { src: `${process.env.PUBLIC_URL}/images/8.jpg`, alt: 'Image 8' },
  { src: `${process.env.PUBLIC_URL}/images/9.jpg`, alt: 'Image 9' },
  { src: `${process.env.PUBLIC_URL}/images/10.jpg`, alt: 'Image 10' },
  { src: `${process.env.PUBLIC_URL}/images/11.jpg`, alt: 'Image 11' },
  { src: `${process.env.PUBLIC_URL}/images/12.jpg`, alt: 'Image 12' },
  { src: `${process.env.PUBLIC_URL}/images/13.jpg`, alt: 'Image 13' },
  { src: `${process.env.PUBLIC_URL}/images/14.jpg`, alt: 'Image 14' },
  { src: `${process.env.PUBLIC_URL}/images/15.jpg`, alt: 'Image 15' },
  { src: `${process.env.PUBLIC_URL}/images/16.jpg`, alt: 'Image 16' },
  { src: `${process.env.PUBLIC_URL}/images/17.jpg`, alt: 'Image 17' },
  { src: `${process.env.PUBLIC_URL}/images/18.jpg`, alt: 'Image 18' },
  { src: `${process.env.PUBLIC_URL}/images/19.jpg`, alt: 'Image 19' },
  { src: `${process.env.PUBLIC_URL}/images/20.jpg`, alt: 'Image 20' },
  { src: `${process.env.PUBLIC_URL}/images/21.jpg`, alt: 'Image 21' },
  { src: `${process.env.PUBLIC_URL}/images/22.jpg`, alt: 'Image 22' },
  { src: `${process.env.PUBLIC_URL}/images/23.jpg`, alt: 'Image 23' },
  { src: `${process.env.PUBLIC_URL}/images/24.jpg`, alt: 'Image 24' },
  { src: `${process.env.PUBLIC_URL}/images/25.jpg`, alt: 'Image 25' },
  { src: `${process.env.PUBLIC_URL}/images/26.jpg`, alt: 'Image 26' },
  { src: `${process.env.PUBLIC_URL}/images/27.jpg`, alt: 'Image 27' },
  { src: `${process.env.PUBLIC_URL}/images/28.jpg`, alt: 'Image 28' },
  { src: `${process.env.PUBLIC_URL}/images/29.jpg`, alt: 'Image 29' },
  { src: `${process.env.PUBLIC_URL}/images/30.jpg`, alt: 'Image 30' },
  // Add more images as needed
  
];

const App = () => {
  return (
    <div className="App">
      <h1>Pixel Paradise
        
      </h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
