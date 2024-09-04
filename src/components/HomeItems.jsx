import React from "react";

const HomeItems = ({ prices, handleDeleteCourse }) => {
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
    </>
  );
};

export default HomeItems;
