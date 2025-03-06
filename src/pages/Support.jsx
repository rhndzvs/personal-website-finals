import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useFeedback } from '../context/FeedbackContext';
import Comment from '../components/Comment';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'boxicons/css/boxicons.min.css';

// Import resource images
import chatGptLogo from '../assets/images/resources-1.jpg';
import w3schoolsLogo from '../assets/images/resources-2.png';
import boxiconsLogo from '../assets/images/resources-3.png';
import scrollRevealLogo from '../assets/images/resources-4.png';
import swiperLogo from '../assets/images/resources-5.svg';

const Support = () => {
  useScrollReveal();
  const [feedback, setFeedback] = useState({ name: '', message: '' });
  const { comments, loading, error, submitComment } = useFeedback();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!feedback.name.trim() || !feedback.message.trim()) {
      return;
    }
    
    const result = await submitComment(feedback.name, feedback.message);
    
    if (result) {
      // Clear the form after successful submission
      setFeedback({ name: '', message: '' });
    }
  };

  const resources = [
    {
      image: chatGptLogo,
      title: 'ChatGPT',
      description: 'ChatGPT has been an invaluable resource in developing this website. It helped me troubleshoot coding issues, suggested best practices for web development, and assisted in optimizing my code structure. Its ability to explain complex concepts in simple terms enhanced my learning experience and improved my coding efficiency.'
    },
    {
      image: w3schoolsLogo,
      title: 'W3Schools',
      description: 'W3Schools served as my primary reference for HTML, CSS, and JavaScript fundamentals. Its comprehensive tutorials, practical examples, and interactive coding environment helped me understand web development concepts clearly. The platform\'s well-organized documentation made it easy to implement various features in my website.'
    },
    {
      image: boxiconsLogo,
      title: 'Boxicons',
      description: 'Boxicons provided the beautiful and modern icons used throughout this website. Its extensive collection of high-quality icons enhanced the visual appeal and user experience of my site. The simple integration process and customization options made it perfect for creating an engaging user interface.'
    },
    {
      image: scrollRevealLogo,
      title: 'ScrollReveal',
      description: 'ScrollReveal added elegant scroll animations to my website, making the user experience more dynamic and engaging. This library helped me create smooth transitions and reveal effects for various elements, enhancing the overall presentation of my content without compromising performance.'
    },
    {
      image: swiperLogo,
      title: 'SwiperJS',
      description: 'SwiperJS enabled me to create this modern and responsive slider for showcasing resources. Its touch-enabled features, smooth transitions, and extensive customization options made it perfect for building an interactive and user-friendly carousel that works seamlessly across all devices.'
    }
  ];

  return (
    <>
      <section className="resources" id="resources">
        <div className="resources-container">
          <h2 className="heading">Valuable <span>Resources</span></h2>

          <div className="resources-wrapper">
            <div className="resources-box mySwiper">
              <div className="resources-content swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  loop={true}
                >
                  {resources.map((resource, index) => (
                    <SwiperSlide key={index} className="resources-slide swiper-slide">
                      <img src={resource.image} alt={resource.title} />
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="feedback" id="feedback">
        <h2 className="heading">Leave a <span>Comment!</span></h2>

        <div className="feedback-container">
          <div className="feedback-form">
            <form id="feedback-form" onSubmit={handleSubmit}>
              <div className="input-box">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  value={feedback.name}
                  onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                  required
                />
              </div>

              <textarea 
                name="message" 
                cols="30" 
                rows="10" 
                placeholder="Your Message"
                value={feedback.message}
                onChange={(e) => setFeedback({...feedback, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="btn">Send Message</button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>

          <div className="comments-section">
            <h3>Recent Comments</h3>
            <div id="comments-container">
              {loading ? (
                <div className="loading"></div>
              ) : comments.length > 0 ? (
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))
              ) : (
                <p>No comments yet. Be the first to leave a comment!</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support; 