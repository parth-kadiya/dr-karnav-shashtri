import React from 'react';

export default function OnlineKatha() {
  return (
    <section className="online-katha" id="online-katha">
            <div className="online-katha-container reverse">
                <div className="online-katha-video">
                    <iframe 
                        src="https://www.youtube.com/embed/7Nw-8b55gf0" 
                        title="YouTube Live" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>            
                <div className="online-katha-content">
                    <h4>Online Katha</h4>
                    <h2>Spiritual Teachings for a Global Audience</h2>
                    <p>
                        Shri Karnavbhai Shashtri’s Kathas are a divine confluence of spirituality and wisdom, captivating audiences across the globe. His narrations of Shrimad Bhagwat Katha and other scriptures illuminate timeless teachings, fostering a deep connection with ancient traditions. Through these sacred discourses, he inspires seekers to explore the profound truths of life and spirituality.
                    </p>
                </div>
            </div>
        </section>

  );
}
