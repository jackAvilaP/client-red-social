import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../app/slices/users';
import useForm from '../../hooks/useForm';

const Setting = () => {
  const dispatch = useDispatch();
  const { form, changed } = useForm({});
  useEffect(() => {
    dispatch(getUser())
  }, [1])
  return (
    <div className='mt-14 max-w-lg flex flex-col justify-center'>
      <section className="header-info">
        <div className='header-title'>
          <h1 className='text-5xl font-bold'>Setting</h1>
        </div>
      </section>
      <div className='card mt-3'>
        <section className='card-body'>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="card-title">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                onChange={changed}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="card-title">Nick</span>
              </label>
              <input
                type="text"
                name="nick"
                placeholder="Nick"
                className="input input-bordered"
                onChange={changed}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="card-title">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                onChange={changed}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="card-title">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                onChange={changed}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="card-title">Avatar</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full "
                name='file'
                onChange={changed}
              />
            </div>

            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
              <button className="btn loading mt-2">loading</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Setting;