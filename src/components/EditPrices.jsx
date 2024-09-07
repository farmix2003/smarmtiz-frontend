"use client";
import InputForm from "@/components/InputForm";
import { useState, useEffect } from "react";
import { findById, updateCourseDetails } from "@/service/service";

const EditPrices = ({ courseId, onClose }) => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState();
  const [courseType, setCourseType] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [desc, setDesc] = useState("");

  // Fetch course data to prepopulate the form
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const course = await findById(courseId);
        setCourseName(course.courseName);
        setCoursePrice(course.coursePrice);
        setCourseType(course.courseType);
        setCourseTime(course.courseTime);
        setImageLink(course.image);
        setDesc(course.desc);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    fetchCourseData();
  }, [courseId]);

  const handleEditCourse = async (e) => {
    e.preventDefault();
    try {
      const updatedCourse = {
        courseName,
        coursePrice,
        courseType,
        courseTime,
        image: imageLink,
        desc,
      };
      console.log(updatedCourse);

      const res = await updateCourseDetails(courseId, updatedCourse);
      console.log("Course updated:", res);
      onClose(); // Close form after editing
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <form className="bg-gray-500 absolute mt-[-200px] ml-[15%] md:ml-[35%] rounded-md p-4 w-[250px] flex flex-col justify-center">
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
      <label htmlFor="">Description: </label>
      <textarea
        className="border-none outline-none text-black"
        value={desc}
        required
        rows={5}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          onClick={handleEditCourse}
          className="mt-3 p-2 bg-slate-900/30 rounded-md text-green-400"
        >
          O'zgartirish
        </button>
        <button
          className="mt-3 p-2 bg-slate-900/30 rounded-md text-red-500"
          onClick={onClose}
        >
          Bekor qilish
        </button>
      </div>
    </form>
  );
};

export default EditPrices;
