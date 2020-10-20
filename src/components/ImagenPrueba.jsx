import React from 'react';
import cascada from '../assets/static/medium.jpg';
import '../assets/styles/components/ImagenPrueba.scss';

const ImagenPrueba = () => (
  <figure className='img__container'>
    <img src={cascada} alt='Esto no es una cascada' className='img_cascada' />
    <figcaption>Que carajos pasa</figcaption>
  </figure>
);

export default ImagenPrueba;
