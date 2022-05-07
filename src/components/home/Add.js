import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignature } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { postCreate } from '../../redux/features';
import { mockInfo } from '../mockData/mockInfo';
import { mockText } from '../mockData/mockText';

const Add = () => {
  const [type, setType] = useState('Cockpit Course');
  const [info, setInfo] = useState(mockInfo[0].info);
  const [name, setName] = useState('Windshear');
  const [summary, setSummary] = useState(mockText[0].summary);
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.featuresReducers);

  const addData = {
    dataType: type,
    dataName: name,
    dataInfo: info,
    dataSummary: summary,
  };

  useEffect(() => {
    if (state.course) {
      setMessage('Course is successfully created!');
    }
    if (state.course_type) setMessage(`Course type ${state.course_type}`);
    if (state.info) setMessage(`Course info ${state.info}`);
  }, [state]);

  const validate = () => {
    let checks = 0;
    if (type === '') checks += 1;
    if (name === '') checks += 1;
    if (info === '') checks += 1;
    if (summary === '') checks += 1;
    if (summary === '') checks += 1;
    return checks;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (validate > 0) {
      setMessage('Please select all options!');
    } else {
      dispatch(postCreate(addData));
    }
  };

  return (
    <form className="flex flex-col items-start ml-9">
      <FaSignature size={70} />

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center">
        <p className="mr-5 text-xl text-lime-600">Course Category :</p>

        <select onChange={(e) => setType(e.target.value)}>
          <option value="Cockpit Course">Cockpit Course</option>
          <option value="Cabin Course">Cabin Course</option>
          <option value="Technic Course">Technic Course</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center">
        <p className="mr-5 text-xl text-lime-600">Course Name :</p>

        <select onChange={(e) => setName(e.target.value)}>
          <option value="Windshear">Windshear</option>
          <option value="Flight Safety">Flight Safety</option>
          <option value="Minimum Equipment List">Minimum Equipment List</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center">
        <p className="mr-5 text-xl text-lime-600">Course Info :</p>

        <select
          className="flex flex-col text-black"
          onChange={(e) => setInfo(e.target.value)}
        >
          {mockInfo.map((item) => (
            <option value={item.info} label={item.info} key={item.id} />
          ))}
        </select>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-2/3">
        <p className="mr-5 text-xl text-lime-600">Course Summary :</p>

        <select className="" onChange={(e) => setSummary(e.target.value)}>
          {mockText.map((item) => (
            <option
              className="flex justify-center"
              value={item.text}
              label={item.text}
              key={item.id}
            />
          ))}
        </select>
      </div>

      <div className="flex items-center items-start mt-5">
        <button
          className="bg-lime-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={(e) => handleAdd(e)}
        >
          Add Course
        </button>

        <Link to="/courses" className="ml-5 text-gray-600">
          Go Back
        </Link>
        <p className="text-rose-500 ml-5">{message || null}</p>
      </div>
    </form>
  );
};

export default Add;
