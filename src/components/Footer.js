import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <footer>
            {/* Back to Top */}
            <div>
                <a href="#" className="text-white leading-4 text-sm py-4 flex items-center justify-center bg-gray-700 flex-grow hover:bg-gray-600">Back to top</a>
            </div>

            {/* Footer Middle */}
            <div className="flex flex-col md:flex-row md:justify-center bg-amazon_blue-light text-white py-12 md:space-x-24">
                <div className="flex flex-col items-center md:items-start mb-8">
                    <h3 className="font-bold mb-2">Get to Know Us</h3>
                    <p className="footer__link">Careers</p>
                    <p className="footer__link">Blog</p>
                    <p className="footer__link">About Amazon</p>
                    <p className="footer__link">Investor Relations</p>
                    <p className="footer__link">Amazon Devices</p>
                    <p className="footer__link">Amazon Tours</p>
                </div>

                <div className="flex flex-col items-center md:items-start mb-8">
                    <h3 className="font-bold mb-2">Make Money with Us</h3>
                    <p className="footer__link">Sell products on Amazon</p>
                    <p className="footer__link">Sell on Amazon Business</p>
                    <p className="footer__link">About apps on Amazon</p>
                    <p className="footer__link">Become an Affiliate</p>
                    <p className="footer__link">Advertise Your Products</p>
                    <p className="footer__link">Self-Publish with Us</p>
                    <p className="footer__link">Host an Amazon Hub</p>
                    <p className="footer__link">› See More Make Money with Us</p>
                </div>

                <div className="flex flex-col items-center md:items-start mb-8">
                    <h3 className="font-bold mb-2">Amazon Payment Products</h3>
                    <p className="footer__link">Amazon Business Card</p>
                    <p className="footer__link">Shop with Points</p>
                    <p className="footer__link">Reload Your Balance</p>
                    <p className="footer__link">Amazon Currency Converter</p>
                </div>

                <div className="flex flex-col items-center md:items-start mb-8">
                    <h3 className="font-bold mb-2">Let Us Help You</h3>
                    <p className="footer__link">Amazon and COVID-19</p>
                    <p className="footer__link">Your Account</p>
                    <p className="footer__link">Your Orders</p>
                    <p className="footer__link">Shipping Rates & Policies</p>
                    <p className="footer__link">Manage Your Content and Devices</p>
                    <p className="footer__link">Amazon Assistant</p>
                    <p className="footer__link">Help</p>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="flex items-center justify-center bg-amazon_blue-light py-7 border-t border-gray-700">
                <Image 
                    src="/amazon_PNG11.png" 
                    width={80} 
                    height={40} 
                    objectFit="contain" 
                    className='cursor-pointer'
                />
            </div>
        </footer>
    )
}

export default Footer
