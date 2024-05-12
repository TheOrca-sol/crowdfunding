import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Row, Typography } from 'antd';
import './sliderStyles.css';  // Make sure to create this CSS file in your project
const { Title, Paragraph } = Typography;

const DynamicCardScroll = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Adjust this to get the right visual effect
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block", background: "transparent", right: '-30px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block", background: "transparent", left: '-30px' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div style={{ width: '100%', padding: '20px 0', marginBottom:'100px' }}>
      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Col xs={24} sm={12} lg={8}>
        <Title level={2} style={{ color: '#fff', textAlign: 'center',marginTop:'200px', marginBottom:'50px' }}>Investir dans l'immobilier n'a jamais été aussi simple</Title>
        <Paragraph style={{ color: '#fff', textAlign: 'center', marginBottom: '50px' }}>
        Investissez en 2 minutes, à partir de 50€ minimum et 0 charge mentale
      </Paragraph>
          <p ></p>
          <Button type="primary" size='large'>S'inscrire</Button>
          <Button type="ghost" size='large'>En savoir plus</Button>
        </Col>
        <Col xs={24} sm={12} lg={12}>
          <Slider {...settings}>
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/home.jpg`} alt="Home" className="slide-image"/>
              <h3>Investissez à partir de 50€</h3>
              <p>Un Investissement sous forme d'obligations, qui nous permet de financer le projet: achat et rénovation.</p>
            </div>
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/home.jpg`} alt="Home" className="slide-image"/>
              <h3>Investissez à partir de 50€</h3>
              <p>Un Investissement sous forme d'obligations, qui nous permet de financer le projet: achat et rénovation.</p>
            </div>
            <div className="slide">
              <img src={`${process.env.PUBLIC_URL}/home.jpg`} alt="Home" className="slide-image"/>
              <h3>Investissez à partir de 50€</h3>
              <p>Un Investissement sous forme d'obligations, qui nous permet de financer le projet: achat et rénovation.</p>
            </div>
            {/* Repeat for each slide */}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default DynamicCardScroll;
