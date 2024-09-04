"use client";
import HomeItems from "@/components/HomeItems";
import { deleteCourse, getPrices } from "@/service/service";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [prices, setPrices] = useState([]);
  const [msg, setMsg] = useState("");
  const [isDeleted, setIdDeleted] = useState(false);

  useEffect(() => {
    const getAllPrices = async () => {
      const res = await getPrices();
      setPrices(res);
    };
    getAllPrices();
  }, []);

  const handleDeleteCourse = async (id) => {
    try {
      const res = await deleteCourse(id);
      setPrices(prices.filter((p) => p._id !== id));
      setMsg(res)
      setIdDeleted(true);
      setTimeout(() => {
        setIdDeleted(false);
      }, 3000)
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }

  return (
    <div className="m-3">
      {
        isDeleted &&
        <div className="bg-green-500 absolute ml-[20%] md:ml-[80%] text-white p-2 rounded-md text-center">
          {msg}
        </div>
      }
      <h1 className="text-4xl my-2">Kurslar</h1>
      {prices.length > 0 ? (
        <HomeItems prices={prices}
          handleDeleteCourse={handleDeleteCourse}
        />
      ) : (
        <div>No prices available</div>
      )}
    </div>
  );
};

export default HomePage;
