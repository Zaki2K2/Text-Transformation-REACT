import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
    });

    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className="container" style={myStyle}>
                <h2 className="my-3">About Us</h2>
                <div className="d-flex align-items-center">
                <div className="container" style={{ textAlign: 'left', width: '100%' }}>
                    {/* Content inside the centered container */}
                    <img src="/android-chrome-256x256.png" alt="LOGO OF TEXT UTILS" />
                    {/* Add more content here */}
                 </div>
            </div>

            <div className="about-page">
      <h1>About TextUtils</h1>
      <p>Welcome to TextUtils – Your Ultimate Text Manipulation Tool</p>
      
      <p>TextUtils is a versatile online platform designed to empower writers, editors, and anyone who deals with text. Whether you're a student working on an essay, a professional crafting content, or just someone who loves playing around with words, TextUtils is here to simplify and enhance your text manipulation experience.</p>
      
      <h2>What Can You Do with TextUtils?</h2>
      <p>TextUtils provides a comprehensive set of tools to help you streamline your text-related tasks. Whether it's formatting, analyzing, or transforming text, we've got you covered.</p>
      
      <h3>Text Formatting</h3>
      <p>With TextUtils, you can easily format your text to match your specific needs. Whether you want to convert text to uppercase, lowercase, title case, or even sentence case, our formatting tools are just a click away.</p>
      
      <h3>Character Count and Word Count</h3>
      <p>TextUtils allows you to instantly get the character count and word count of your text. This is immensely useful for ensuring your content fits within specific limits, whether you're writing for social media, essays, or publications.</p>
      
      <h3>Text Analysis</h3>
      <p>Our text analysis tools enable you to gain insights into your writing. You can identify the most common words, find the frequency of words, and even estimate the reading time of your text.</p>
      
      <h3>Text Transformation</h3>
      <p>TextUtils lets you transform your text in various creative ways. You can add or remove line breaks, remove extra spaces, and even encode or decode text to and from various formats.</p>
      
      <h2>Why Choose TextUtils?</h2>
      <p>TextUtils stands out as a reliable and user-friendly text manipulation tool for several reasons:</p>
      
      <h3>Free and Accessible</h3>
      <p>We believe that powerful tools should be accessible to everyone. That's why TextUtils is available completely free of charge, without any limitations. Simply visit our website and start using the tools right away – no downloads or installations required!</p>
      
      <h3>Efficiency and Convenience</h3>
      <p>TextUtils is designed with efficiency in mind. Our user-friendly interface ensures that you can perform complex text tasks with just a few clicks. Say goodbye to manual formatting and time-consuming text adjustments – TextUtils does it all for you.</p>
      
      <h3>Privacy and Security</h3>
      <p>Your privacy is important to us. We don't store any of your input text on our servers, ensuring that your sensitive information remains safe and secure.</p>
      
      <h3>Constant Improvements</h3>
      <p>We're committed to providing the best possible experience for our users. We continuously update and improve TextUtils based on user feedback and emerging text-related needs.</p>
      
      <h2>Get Started Now!</h2>
      <p>Ready to simplify your text manipulation tasks? Head over to TextUtils and start utilizing our powerful tools to enhance your writing experience. Whether you're a student, a writer, or just someone who deals with text regularly, TextUtils has something to offer to everyone.</p>
      
      <p>Join us on this journey of making text manipulation effortless and enjoyable. Create an account or dive right in as a guest user. The world of hassle-free text manipulation awaits you!</p>
    </div>

            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">
                    {btntext}
                </button>
            </div>
        </div>
    );
}
