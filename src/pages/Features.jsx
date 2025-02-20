import React from "react";
import "../styles/features.css";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";
import lgpic from "../images/lgprofile.png";
import RideImg from "../images/rideimg.png";
import Emergency from "./../images/Emergency.png";

const Features = () => {
  return (
    <div>
      
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">
              AI- and ML-Powered Platform for Online Safety
              </p>
              <h2 className="features_title">
              Our one-stop platform is designed to combat online abuse, harassment, and cyber threats with the following advanced features:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://www.shutterstock.com/image-vector/artificial-intelligence-ai-icon-on-260nw-2517475695.jpg" alt="Real-Time Crime Detection" width={150} height={130} />
                <h3 className="mt-4">AI-Driven Content Moderation</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Online platforms often fail to detect abusive content in real time, allowing harmful messages, images, or videos to spread unchecked. Our AI-driven content moderation system actively scans and filters messages, posts, and comments, ensuring that offensive material is identified and removed before it reaches victims. Unlike traditional moderation, which relies on keyword detection, our system uses natural language processing (NLP) and machine learning to understand context, reducing false positives and improving efficiency. This approach creates a safer digital space, preventing cyberbullying, harassment, and hate speech from escalating.                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png" alt="Emergency Service Support" width={150}height={130} />
                <h3 className="mt-4">Legal Support Chatbot</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Many victims of online abuse do not know their rights or how to report incidents legally. Our AI-powered legal chatbot provides instant legal guidance based on jurisdiction, helping victims navigate complex cyber laws effortlessly. The chatbot offers step-by-step assistance on filing complaints, reporting incidents, and connecting with legal authorities. It also helps generate legally compliant reports, ensuring proper documentation for law enforcement. With this 24/7 virtual legal assistant, victims can take immediate action without delays, empowering them to fight against cybercrime effectively.                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://projectcentersinchennai.co.in/assets/ImagesDB/Blockchain-Project-Ideas-for-Students.png" alt="Incident Reporting" width={150} height={130}/>
                <h3 className="mt-4">Based Evidence Storage</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                One of the biggest challenges victims face is proving online harassment due to tampered or deleted messages. Our blockchain-based evidence storage system securely logs abusive content in a tamper-proof, decentralized ledger, making it verifiable and admissible in court. Each record is encrypted and timestamped, ensuring authenticity. This guarantees that evidence cannot be altered or erased, giving victims strong legal backing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://png.pngtree.com/png-clipart/20211014/ourmid/pngtree-mental-health-problems-flat-illustration-anxiety-disorder-png-image_3977575.png" alt="Live Location" width={150} height={130}/>
                <h3 className="mt-4">Mental Health Assistance</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>

                Cyber abuse often leads to anxiety, depression, and emotional distress. Our AI-driven mental health support module offers self-help tools, guided therapy sessions, and instant counselor booking. Victims can access licensed therapists and psychological resources, ensuring their mental well-being while recovering from online harassment.






</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWRPLE6JL4G7erEhE8kIMHpItECb8rimtZw&s" alt="Emergency Chat" width={150} height={130} />
                <h3 className="mt-4">AI-Powered Chrome Extension</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Our Chrome extension enhances online safety by automatically analyzing and filtering comments, messages, and posts in real-time. Using AI and NLP, it detects harmful content, hate speech, and cyber threats across various websites and social media platforms. Users receive instant alerts and content warnings, ensuring a safer browsing experience while protecting them from online harassment.                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://cdn.prod.website-files.com/64b94adadbfa4c824629b337/654f275567497c712f38faf0_DeepFake.webp" alt="Mail Services" width={150} height={130} />
                <h3 className="mt-4">Deepfake Detection for Digital Safety</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Our platform features AI-powered deepfake detection to combat misleading and manipulated media. Using advanced machine learning algorithms, it analyzes facial expressions, voice patterns, and inconsistencies in videos and images to identify synthetic content. This ensures users can verify authenticity, preventing the spread of false information, impersonation, and deepfake-based harassment. By integrating real-time detection and alerts, we empower individuals to stay protected from digital deception. </p>  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
