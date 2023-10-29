import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

export default function BaseCarousel({
  items,
  args,
  customizedImage,
  fade,
  indicators,
  caption,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="d-flex mx-auto"
          width={650}
          style={{
            maxWidth: '650px',
            maxHeight: '390px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '.25rem',
          }}
        />
        {caption && (
          <CarouselCaption
            className="text-white bg-black w-25 mx-auto pt-2 pb-2 rounded-1"
            // captionText={item.description}
            captionHeader={item.name}
            style={{ maxWidth: '500px !important' }}
          />
        )}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      fade={fade}
      style={{ zIndex: '0' }}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      {indicators && (
        <>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </>
      )}
    </Carousel>
  );
}
