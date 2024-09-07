import React, { useState } from "react";
import EditPrices from "./EditPrices";

const HomeItems = ({ prices, handleDeleteCourse }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleEditCourse = (id) => {
    setSelectedCourseId(id);
    setIsEditMode(true);
  };

  const closeEditForm = () => {
    setIsEditMode(false);
    setSelectedCourseId(null);
  };
  return (
    <>
      <table className="w-full border-white border-2">
        <thead className="border-2 border-white items-start">
          <tr>
            <th className="border-x-2 border-white">Kurs nomi</th>
            <th className="border-x-2 border-white">Kurs turi</th>
            <th className="border-x-2 border-white">Kurs narxi</th>
            <th className="border-x-2 border-white">Kurs soati</th>
            <th className="border-x-2 border-white">Actions</th>
          </tr>
        </thead>
        <tbody className="items-start border-spacing-1 border-2 border-white">
          {prices.map((price, index) => (
            <tr
              key={index}
              className="items-start border-spacing-1 border-2 border-white"
            >
              <td className="border-x-2 border-white px-2">
                {price.courseName}
              </td>
              <td className="border-x-2 border-white px-2">
                {price.courseType}
              </td>
              <td className="border-x-2 border-white px-2">
                {price.coursePrice}ming so'm
              </td>
              <td className="border-x-2 border-white px-2">
                {price.courseTime} soat
              </td>
              <td className="flex items-center justify-evenly">
                <button onClick={() => handleEditCourse(price._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="lightBlue"
                  >
                    <path
                      d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 
                  26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5
                   30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141
                    85-28-29 57 57-29-28Z"
                    />
                  </svg>
                </button>
                <button onClick={() => handleDeleteCourse(price._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="red"
                  >
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 
                      56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                      0h80v-360h-80v360ZM280-720v520-520Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditMode && selectedCourseId && (
        <EditPrices courseId={selectedCourseId} onClose={closeEditForm} />
      )}
    </>
  );
};

export default HomeItems;
