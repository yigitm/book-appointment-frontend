import React, { useState, useEffect, componentDidMount } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postCreate } from '../../redux/features';
import { FaSignature } from 'react-icons/fa';
import { mockInfo } from '../mockData/mockInfo';
import { mockText } from '../mockData/mockText';

const Add = () => {
  const [type, setType] = useState('');
  const [info, setInfo] = useState('');
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.featuresReducers);
  const navigate = useNavigate();
  const addData = {
    type,
    info,
    name,
    summary,
  };

  useEffect(() => {
    if (state.course) {
      navigate('/courses');
    }
    if (state.course_type) setMessage(`Course type ${state.course_type}`);
    if (state.info) setMessage(`Course info ${state.info}`);
    if (state.summary) setMessage(`Course summary ${state.summary}`);
    if (state.course_name) setMessage(`Course name ${state.course_name}`);
  }, [state]);

  const errors = (obj) => {
    if (obj.course_type == true) false;
  };

  const validate = (input) => {
    let checks = 0;
    if (input.type === '') checks += 1;
    if (input.info === '') checks += 1;
    if (input.name === '') checks += 1;
    if (input.summary === '') checks += 1;
    return checks;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (validate(addData) > 0) {
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

        <select required onChange={(e) => setType(e.target.value)}>
          <option value="Cockpit Course">Pilot Course</option>
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
          required
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
        <div className="flex items-center items-start mt-5">
          <button
            className="bg-lime-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={(e) => handleAdd(e)}
          >
            Add Course
          </button>
          <p className="text-rose-500 ml-5">{message || null}</p>
        </div>
      </div>
    </form>
  );
};

export default Add;
