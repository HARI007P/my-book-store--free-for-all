import React from 'react'
import list from "../../public/list";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function Freebook() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const filterData = list.filter((data) =>data.category === "Sale");
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 '>
      <div>
        <h1 className='font-bold text-pink-500 text-2xl pb-2'>Rs 1 Books</h1>
        <p className="text-xl">Explore worlds unknown, unravel mysteries, and broaden your horizons, all at no cost. Dive into the endless possibilities awaiting within the pages of our carefully curated free books collection.</p>
      </div>
      <br></br>
    <div>
    <Slider {...settings}>
      {filterData.map((item) =>(
        <Cards item = {item} key = {item.id}/>
      ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
