"use client";
import InputForm from "@/components/InputForm";
import { addNewCourse } from "@/service/service";
import React, { useState } from "react";

const AdminPanel = () => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseType, setCourseType] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleAddNewCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await addNewCourse(
        courseName,
        coursePrice,
        courseTime,
        courseType,
        imageLink
      );
      setCourseName("");
      setCoursePrice(0);
      setCourseType("");
      setCourseTime("");
      setImageLink("");
      console.log("Course added successfully:", res);
    } catch (error) {
      console.error("Error adding course:", error.message);
      // Optionally display the error to the user
    }
  };

  return (
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
        name={"Kurs turi: "}
        value={courseType}
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
      <button className="mt-3 p-2 bg-slate-600/30 rounded-md">Qo'shish</button>
    </form>
  );
};

export default AdminPanel;
