import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";
import "../../../src/App.css";
import eventImage from "../../Assets/Event image.png";

const Event = () => {
    return (
        <div className="">
            <div className="flex flex-col-reverse lg:flex-row justify-end lg:justify-evenly min-h-screen lg:items-center bg-gray-100">
                <div className="w-full md:w-[456px] flex justify-center p-[20px] md:p-0">
                    {/*Event Header*/}
                    <div className="w-full">
                        <h1 className="font-bold text-[48px] leading-[55px] text-purpleDark">
                            Birthday Bash
                        </h1>
                        <p className="text-gray-500 font-normal text-[18px] leading-[21px]">
                            Hosted by{" "}
                            <span className="font-semibold">Elysia</span>
                        </p>

                        {/*event date and address*/}
                        <div className="flex flex-col gap-y-[33px] w-full mt-[65px]">
                            <div className="flex justify-between items-center">
                                <div className="flex  items-center h-[56px]">
                                    <div className=" h-[56px] w-[56px] bg-[#FFFFFF] eventIconShadow rounded-[10px] mr-[20px] flex justify-center items-center">
                                        <FaCalendarAlt className="text-center text-[26px]" />
                                    </div>
                                    <div className="flex flex-col text-[16px] md:text-[18px]">
                                        <span className="text-[16px] md:text-[18px] leading-[21px] font-semibold">
                                            18 August 6:00PM
                                        </span>
                                        <span className=" text-[16px] md:text-[18px] leading-[21px]">
                                            to{" "}
                                            <span className="font-semibold">
                                                19 August 1:00PM
                                            </span>{" "}
                                            UTC +10
                                        </span>
                                    </div>
                                </div>
                                <MdArrowForwardIos />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex  items-center h-[56px]">
                                    <div className=" h-[56px] w-[56px] bg-[#FFFFFF] eventIconShadow rounded-[10px] mr-[20px] flex justify-center items-center">
                                        <GrLocation className="text-center text-[26px]" />
                                    </div>
                                    <div className="flex flex-col text-[16px] md:text-[18px]">
                                        <span className="leading-[21px] font-bold">
                                            18 August 6:00PM
                                        </span>
                                        <span className="text-[14px] leading-[21px]">
                                            Suburb , state, Postcode
                                        </span>
                                    </div>
                                </div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={eventImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Event;
