"use client";
import InputForm from "@/components/InputForm";
import { addNewCourse } from "@/service/service";
import React, { useState } from "react";

const AdminPanel = () => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState();
  const [courseType, setCourseType] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleAddNewCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await addNewCourse(
        courseName,
        coursePrice,
        courseTime,
        courseType,
        imageLink,
        desc
      );
      setIsSuccess(true);
      setMsg("Kurs muvvafaqiyatli qo'shildi");
      setTimeout(() => {
        setIsSuccess(false);
        setMsg("");
      }, 3000);
      console.log("Course added successfully:", res);
      setCourseName("");
      setCoursePrice(0);
      setCourseType("");
      setCourseTime("");
      setImageLink("");
      setDesc("");
    } catch (error) {
      console.error("Error adding course:", error.message);
      // Optionally display the error to the user
    }
  };

  return (
    <div className="w-screen">
      {isSuccess && (
        <div className="bg-green-500 absolute ml-[40%] md:ml-[80%] text-white p-2 rounded-md text-center">
          {msg}
        </div>
      )}
      <form
        onSubmit={handleAddNewCourse}
        className="bg-gray-500/40 rounded-md p-4 w-[250px] flex flex-col justify-center mt-10 mx-auto"
      >
        <InputForm
          type={"text"}
          name={"Kurs nomi: "}
          value={courseName}
          change={setCourseName}
        />
        <InputForm
          type={"number"}
          name={"Kurs narxi: "}
          value={coursePrice}
          change={setCoursePrice}
        />
        <InputForm
          type={"text"}
          name={"Kurs turi: " || ""}
          value={courseType || ""}
          change={setCourseType}
        />
        <InputForm
          type={"text"}
          name={"Kurs soati: "}
          placeHolder={"Misol 1.5 soat"}
          value={courseTime}
          change={setCourseTime}
        />
        <InputForm
          type={"text"}
          name={"Rasm linki: "}
          value={imageLink}
          change={setImageLink}
        />
        <label htmlFor="">Description: </label>
        <textarea
          className="border-none outline-none text-black"
          value={desc}
          required
          rows={5}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="mt-3 p-2 bg-slate-600/30 rounded-md">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
