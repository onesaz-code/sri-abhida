import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";

const galleryImages = [
  // { src: '/images/campus1.webp', alt: 'Campus' },
  { src: "/images/campus2.jpg", alt: "Campus" },
  { src: "/images/campus3.jpg", alt: "Campus" },
  { src: "/images/sectionimage1.jpg", alt: "Classroom" },
  { src: "/images/campus5.jpg", alt: "Campus" },
  { src: "/images/campus6.jpeg", alt: "Campus" },
  { src: "/images/campus7.jpeg", alt: "Campus" },
  // { src: '/images/gallery1.jpg', alt: 'Sri Abhida' },
  // { src: '/images/gallery2.jpg', alt: 'Sri Abhida' },
  // { src: '/images/gallery3.jpg', alt: 'Sri Abhida' },
  { src: "/images/sectionimage2.jpg", alt: "Classroom" },
  { src: "/images/campus8.jpeg", alt: "Campus" },
  { src: "/images/campus4.jpg", alt: "Campus" },
];

const featuredGalleryImages = [
  { src: "/images/sectionimage3.webp", alt: "Campus" },
  { src: "/images/sectionimage2.jpg", alt: "Campus" },
  { src: "/images/sriabhida02.jpg", alt: "Campus" },
  { src: "/images/sectionimage1.jpg", alt: "Campus" },
  { src: "/images/tte.jpg", alt: "Campus" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const allImages = [...galleryImages, ...featuredGalleryImages];

  const openViewer = (index: number) => {
    setActiveIndex(index);
  };

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev - 1 + allImages.length) % allImages.length;
    });
  };

  const showNext = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev + 1) % allImages.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
        return;
      }
      if (event.key === "ArrowLeft") {
        showPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <PageHero title="Gallery" backgroundImage="/images/about-hero.jpg" />

      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              SRI ABHIDA Boys Residential Campus, PATANCHERU-BHANRU
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => openViewer(index)}
                  className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Open ${img.alt} image`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
              Campus Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A closer look at campus life, classrooms, and student moments.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {featuredGalleryImages.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => openViewer(galleryImages.length + index)}
                  className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Open ${img.alt} image`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-6">
          <button
            type="button"
            onClick={closeViewer}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close image viewer"
          />
          <div className="relative z-10 w-full max-w-7xl">
            <div className="absolute -top-10 right-0 flex items-center gap-3 text-white">
              <span className="text-sm text-white/70">
                {activeIndex + 1} / {allImages.length}
              </span>
              <button
                type="button"
                onClick={closeViewer}
                className="rounded-full border border-white/40 px-3 py-1.5 text-sm hover:bg-white hover:text-black transition"
              >
                Close
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
              <img
                src={allImages[activeIndex].src}
                alt={allImages[activeIndex].alt}
                className="w-full max-h-[90vh] object-contain"
              />
            </div>

            <div className="mt-6 flex items-center justify-between text-white">
              <button
                type="button"
                onClick={showPrev}
                className="rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                Previous
              </button>
              <p className="text-sm text-white/70">
                Use left/right arrows to navigate. Press Esc to close.
              </p>
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
