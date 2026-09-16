import React from 'react';
import { SHOWCASE_MODULES } from '../data/landingData';

interface ProductTourProps {
  activeIndex: number;
  onSelectSlide: (index: number) => void;
}

export const ProductTour: React.FC<ProductTourProps> = ({ activeIndex, onSelectSlide }) => {
  const totalSlides = SHOWCASE_MODULES.length;

  const handlePrev = () => {
    onSelectSlide((activeIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    onSelectSlide((activeIndex + 1) % totalSlides);
  };

  return (
    <div id="product-tour" style={{ scrollMarginTop: '80px' }}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {SHOWCASE_MODULES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
              onClick={() => onSelectSlide(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {SHOWCASE_MODULES.map((module, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={module.id}
                className={`carousel-item ${isActive ? 'active' : ''}`}
                style={{ display: isActive ? 'block' : 'none' }}
              >
                <section
                  className={`section showcase-section ${module.isAlt ? 'showcase-section-alt' : ''}`}
                  id={module.id}
                >
                  <div className="container showcase-grid" id={index === 0 ? 'grid22' : undefined}>
                    <div className="showcase-content">
                      <span className="section-badge">{module.badge}</span>

                      <h2>
                        {module.title} <span>{module.highlightTitle}</span>
                      </h2>

                      <p>{module.description}</p>

                      <ul className="feature-list">
                        {module.features.map((feature, fIdx) => (
                          <li key={fIdx}>{feature}</li>
                        ))}
                      </ul>

                      <a href="#contact" className="text-link">
                        {module.ctaText}
                      </a>
                    </div>

                    <div className={`showcase-image-wrapper ${module.imageWrapperClass || ''}`}>
                      <img
                        src={module.image}
                        alt={module.alt}
                        className={module.imageClass || 'showcase-image'}
                        loading="lazy"
                        data-asset={module.id.replace('-module', '')}
                      />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
          aria-label="Next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
