import React ,{ Component } from "react";
import {  Carousel   } from 'antd';
class CarouselAdd extends Component{
    render(){
        return (
            <div>
                   <Carousel autoplay style={{ padding: 24, height:300 }}>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <img  src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"/>
                <h3>Gambar SATU</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>

            </div>
        );
    }
}

export default CarouselAdd;