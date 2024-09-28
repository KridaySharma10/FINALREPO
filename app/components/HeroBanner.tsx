// app/components/HeroBanner.tsx
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-image-wrapper">
        <Image
          src="/images/hero-image.jpg"
          alt="Olympics Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="hero-content">
        <h1>MEMORIES ARE FOR EVER!</h1>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroBanner;
