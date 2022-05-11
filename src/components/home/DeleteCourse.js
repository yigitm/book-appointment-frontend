import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignature } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getList, delCourse } from '../../redux/features';

const DeleteCourse = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();
  const [type, setType] = useState(state);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (state.status === 500) setMessage('Please check your selection...');
    if (sessionStorage['LOGIN?'] === undefined)
      setMessage('Please login to continue...');
    if (state.message) {
      setMessage(state.message);
    }
  }, [state]);

  useEffect(() => {
    dispatch(getList);
  }, []);

  const handleDel = (e) => {
    e.preventDefault();
    dispatch(delCourse(type));
  };

  return (
    <form className="flex flex-col items-start ml-9">
      <FaSignature size={70} />

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-2/3">
        <p className="mr-5 text-xl text-lime-600">Course Category :</p>
        <select className="" onChange={(e) => setType(e.target.value)}>
          <option>Please select course</option>
          {state.length > 0
            ? state.map((item) => (
                <option
                  key={item.id}
                  id={item.id}
                  className="flex justify-center"
                  value={item.course_type}
                  label={item.course_type}
                >
                  {item.course_type}
                </option>
              ))
            : null}
        </select>
      </div>
      <div className="flex items-center items-start mt-5">
        <button
          className="bg-lime-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={(e) => handleDel(e)}
        >
          Del Course
        </button>

        <Link to="/courses" className="ml-5 text-gray-600">
          Go Back
        </Link>
        <p className="text-rose-500 ml-5">{message || null}</p>
      </div>
    </form>
  );
};

export default DeleteCourse;
