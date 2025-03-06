import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import 'boxicons/css/boxicons.min.css';

// No need to import personal photos as we'll use direct URLs
// Import images for favorite books
import powerBook from '../assets/images/favorite-book-1.jpg';
import habitsBook from '../assets/images/favorite-book-2.jpg';
import richDadBook from '../assets/images/favorite-book-3.jpg';

const Gallery = () => {
  useScrollReveal();
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image, title, description) => {
    if (modalRef.current && modalImgRef.current) {
      modalRef.current.style.display = 'block';
      modalImgRef.current.src = image;
      setModalTitle(title);
      setModalDescription(description);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
      setIsModalOpen(false);
      document.body.style.overflow = ''; // Restore scrolling
    }
  };

  // Close modal when clicking outside the image or pressing ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        closeModal();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Ensure scrolling is restored on unmount
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="gallery" id="gallery">
        <h2 className="heading">Picture <span>Gallery</span></h2>

        <div className="gallery-section">
          <h3 className="gallery-category">My Pictures</h3>
          <div className="gallery-container">
            <div className="gallery-box" data-scroll-reveal>
              <img 
                src="https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/Family%20Picture.jpg?raw=true" 
                alt="Family Picture" 
              />
              <div className="gallery-layer">
                <h4>Family Picture</h4>
                <p>A cherished moment with my loving family, the foundation of my strength and inspiration.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    "https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/Family%20Picture.jpg?raw=true", 
                    "Family Picture", 
                    "A cherished moment with my loving family, the foundation of my strength and inspiration."
                  );
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="gallery-box" data-scroll-reveal>
              <img 
                src="https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/Graduation%20Picture.jpg?raw=true" 
                alt="Graduation Picture" 
              />
              <div className="gallery-layer">
                <h4>Graduation Picture</h4>
                <p>Celebrating a milestone achievement in my academic journey, marking the beginning of new adventures.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    "https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/Graduation%20Picture.jpg?raw=true", 
                    "Graduation Picture", 
                    "Celebrating a milestone achievement in my academic journey, marking the beginning of new adventures."
                  );
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="gallery-box" data-scroll-reveal>
              <img 
                src="https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/With%20Girlfriend%20Picture.jpg?raw=true" 
                alt="With Girlfriend Picture" 
              />
              <div className="gallery-layer">
                <h4>With Girlfriend Picture</h4>
                <p>Sharing precious moments with my special someone who brings joy and love to my life.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    "https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/With%20Girlfriend%20Picture.jpg?raw=true", 
                    "With Girlfriend Picture", 
                    "Sharing precious moments with my special someone who brings joy and love to my life."
                  );
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-section">
          <h3 className="gallery-category">My Favorite Books</h3>
          <div className="gallery-container">
            <div className="gallery-box" data-scroll-reveal>
              <img src={powerBook} alt="Favorite Book 1" />
              <div className="gallery-layer">
                <h4>48 Laws of Power</h4>
                <p>A fascinating read that changed my perspective.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(powerBook, "48 Laws of Power", "A fascinating read that changed my perspective.");
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="gallery-box" data-scroll-reveal>
              <img src={habitsBook} alt="Favorite Book 2" />
              <div className="gallery-layer">
                <h4>Atomic Habits</h4>
                <p>One of my all-time favorite books.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(habitsBook, "Atomic Habits", "One of my all-time favorite books.");
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>

            <div className="gallery-box" data-scroll-reveal>
              <img src={richDadBook} alt="Favorite Book 3" />
              <div className="gallery-layer">
                <h4>Rich Dad Poor Dad</h4>
                <p>A must-read for everyone.</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openModal(richDadBook, "Rich Dad Poor Dad", "A must-read for everyone.");
                }}>
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying images */}
      <div id="imageModal" className="modal" ref={modalRef}>
        <span className="modal-close" onClick={closeModal}>&times;</span>
        <div className="modal-content">
          <img ref={modalImgRef} alt="Modal" />
          {modalTitle && <h3>{modalTitle}</h3>}
          {modalDescription && <p>{modalDescription}</p>}
        </div>
      </div>
    </>
  );
};

export default Gallery; 