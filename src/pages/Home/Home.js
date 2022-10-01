import React from "react";
import "../../App.css";

const Home = () => {
    return (
        <div className="min-h-screen w-full  landingBackgroud">
            <div className="flex lg:flex-row flex-col-reverse min-h-screen justify-around items-center pt-[26px] md:pt-[60px]">
                <div className="mt-[36px] md:mt-[55px] lg:mt-0">
                    <img
                        className="imgDropShadow sm:max-w-sm"
                        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T223340Z&X-Amz-Expires=86400&X-Amz-Signature=4dc46eb5a0df9bf1e710ff9f6ca1f0188f08c8438cb226d873d6652611937df2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
                        alt=""
                    />
                </div>
                <div>
                    <div className="">
                        <div className="font-popins text-center lg:text-right w-[375px] md:w-[521px]">
                            <div className="flex flex-col font-bold text-[41px] md:text-[64px] ">
                                <span className="text-purpleDark leading-[41px] md:leading-[64px]">
                                    Imagine if
                                </span>{" "}
                                <span className="headerTextGradient leading-[41px] md:leading-[64px]">
                                    Snapchat
                                </span>
                                <span className="text-purpleDark leading-[41px] md:leading-[64px]">
                                    had events
                                </span>
                            </div>
                            <p className="font-light text-[16px] md:text-[24px] w-[375px] md:w-[521px] leading-[28px] text-gray-600">
                                Easily host and share events with your friends{" "}
                                <br />
                                across any social media.
                            </p>
                        </div>
                        <div className="relative mt-[52px] hidden lg:block">
                            <button className="w-[320px] h-[55px] rounded-[10px]  buttonGradientColor absolute right-0">
                                🎉 Create my event
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden order-first mt-[52px] mb-[25px]">
                    <button className="w-[320px] h-[55px] rounded-[10px]  buttonGradientColor ">
                        🎉 Create my event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
