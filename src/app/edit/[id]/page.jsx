"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { findById, updateCourseDetails } from "@/service/service";

const EditPrices = ({ id }) => {
  const [course, setCourse] = useState({
    courseName: "",
    courseType: "",
    coursePrice: "",
    courseTime: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await findById(id);
        setCourse(res);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      updateCourseDetails(id, course);
      router.push("/"); // Redirect to home page or another appropriate page
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  console.log(course);

  return (
    <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kur nomi:</label>
          <input
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Kurs turi:</label>
          <input
            type="text"
            name="courseType"
            value={course.courseType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Kurs narxi:</label>
          <input
            type="text"
            name="coursePrice"
            value={course.coursePrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Kurs soati:</label>
          <input
            type="text"
            name="courseTime"
            value={course.courseTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPrices;
