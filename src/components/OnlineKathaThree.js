import React from 'react';

export default function OnlineKathaThree() {
  return (
    <section className="online-katha">
            <div className="online-katha-container reverse">
                <div className="online-katha-video">
                    <iframe 
                        src="https://www.youtube.com/embed/wNh8IQAgmbI" 
                        title="YouTube Live" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>            
                <div className="online-katha-content">
                    <h4>Online Katha</h4>
                    <h2>Inspiring Spiritual Narratives</h2>
                    <p>
                        Experience the divine storytelling of Shri Karnavbhai Shashtri, where timeless wisdom meets modern perspectives. His Kathas provide a beautiful blend of tradition and inspiration, helping listeners embrace spiritual truths in their daily lives.
                    </p>
                </div>
            </div>
        </section>
  );
}
