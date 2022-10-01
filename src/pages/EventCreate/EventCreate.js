import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import addPhotoImg from "../../Assets/file.png";

const EventCreate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <form className="">
                <div className="md:flex min-h-[80vh] items-center">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        {/*input field*/}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                🎉 My event is called
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                🗓 It starts at
                            </label>
                            <input
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                                type="date"
                                name=""
                                id="startDate"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                🏁 It ends at (optional)
                            </label>
                            <input
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                                type="date"
                                name=""
                                id="startDate"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                📍 It’s happening at (optional)
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                🎉 My event is called
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="ml-2 my-2">
                                🎉 My event is called
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-200 lg:w-[718px] py-3 px-2 text-gray-600 outline-none focus:bg-purple2 rounded-[4px]"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <label htmlFor="photo">
                            <img
                                src={addPhotoImg}
                                alt="img"
                                className="cursor-pointer"
                            />
                        </label>
                        <input
                            className="hidden"
                            type="file"
                            name="photo"
                            id="photo"
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <input
                        type="submit"
                        className="py-3 px-8 rounded-[4px] bg-gradient-to-r from-invitedPurple to-purple1 text-gray-100"
                        value="Next"
                        onClick={() => navigate("/event")}
                    />
                </div>
            </form>
        </div>
    );
};

export default EventCreate;
