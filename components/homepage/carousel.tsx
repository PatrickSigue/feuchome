"use client";

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';
import Link from "next/link";

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container slide-texts">
          <div className="embla__slide slide-1">
            <h1>Our Unstoppable <br/> 4-Point Agenda:</h1>
            <h5>Get to know FEU CSO’s step to make our vision as a <br/> central student organization into reality.</h5>
            <Link href="/about#agenda">LEARN MORE</Link>
          </div>
          <div className="embla__slide slide-2">
            <h1>Get to know your <br />FEU CSO Officers!</h1>
            <h5>Meet the Batch 89 of FEU CSO for A.Y. 2024-2025</h5>
             <Link href="/about#exec1">LEARN MORE</Link>
          </div>
          <div className="embla__slide slide-3">
            <h1>Check out our latest <br />Events and Iniatitives</h1>
            <h5>Explore our past projects and events.</h5>
            <a href='#>'>LEARN MORE</a>
          </div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
