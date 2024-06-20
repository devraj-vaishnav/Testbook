import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import http from '../http';

export default function Edit() {
  const navigate = useNavigate();
  const [input, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []); // Adding an empty dependency array to run this effect only once

  const fetchUser = () => {
    http.get('/user/' + id + '/edit').then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    }).catch((error) => {
      console.error("There was an error fetching the user!", error);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const update = (event) => {
    event.preventDefault();
    http.put('/user/' + id, input).then((res) => {
      navigate('/');
      console.log(res);
    }).catch((error) => {
      console.error("There was an error submitting the form!", error);
    });
  };

  return (
    <div className='m-5'>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='card p-5'>
            <form onSubmit={update}>
              <h2> Edit User</h2>
              <label>Name</label>
              <input name='name' type='text' className='form-control mb-3'
                value={input.name || ''}
                onChange={handleChange}
              />
              <label>Email</label>
              <input name='email' type='text' className='form-control mb-3'
                value={input.email || ''}
                onChange={handleChange} />
              <button className='btn btn-primary' type='submit'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
