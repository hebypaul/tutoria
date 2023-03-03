import React, { useEffect, useState }  from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card';
import useWindowDimensions from '../CustomHooks/useWindowDimensions';
import { getCourses } from '../features/getCourses';



const CardCarousel = () => {
    const { height, width } = useWindowDimensions();

    const [visbleSlides, setVisibleSlides] = useState(3);
  
    const [dimensions, setDimensions] = useState({
      h: 700,
      w: 500,
    });
    
    const [courses, setCourses] = useState([])

    useEffect(() => {
      if (width > 1300) {
        setVisibleSlides(4);
        setDimensions({
          h: 500,
          w: 400,
        });
      } else if (width < 1300 && width > 1024) {
        setVisibleSlides(3);
        setDimensions({
          h: 600,
          w: 400,
        });
      }else if (width < 1024 && width > 768) {
        setVisibleSlides(2);
        setDimensions({
          h: 500,
          w: 400,
        });
      } else {
        setVisibleSlides(1);
        setDimensions({
          h: 300,
          w: 400,
        });
      }
    }, [height, width]);

    useEffect(()=>{
      getCourses('all').then((res) =>{
        setCourses(res);
      })
    },[])

    return (
<div className="container mx-auto p-5">
<CarouselProvider
       naturalSlideWidth={dimensions.w}
       naturalSlideHeight={dimensions.h}
       infinite 
       step={1}
       totalSlides={5}
       visibleSlides={visbleSlides}
     >

    <Slider>
        {courses?.map((course,idx)=>(
          <Slide index={idx} key={idx}>
              <Card data={course}/>
          </Slide>
        ))
        }
    </Slider>
<div className="flex ">
<div className=" mx-auto mt-2">
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


export default CardCarousel;