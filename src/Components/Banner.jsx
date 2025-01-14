import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className="max-w-screen-xl mx-auto">
                    <img className=""
                     src="https://i.ibb.co.com/3MrB113/flat-design-pet-sitting-facebook-cover-23-2149641135.jpg"></img>
                  
                </div>
                <div>
                    <img src="https://i.ibb.co.com/TTzGjwC/Gear-New-Pet-1168772154.webp"></img>
               
                </div>
                <div>
                    <img src="https://i.ibb.co.com/B3Q4xJT/adopt-pet-template-banner-23-2148555612-1.jpg"></img>
                    
                </div>
                <div>
                    <img src="https://i.ibb.co.com/94VNx5Q/stock-photo-funny-gray-kitten-and-smiling-dog-with-beautiful-big-eyes-on-trendy-blue-background-love.jpg"></img>
            
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;
