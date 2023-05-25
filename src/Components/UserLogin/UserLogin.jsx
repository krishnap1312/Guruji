import React from 'react'

function UserLogin() {
  return (
    <div className='container-xxl mt-5'>
      <div className='container-xxl justify-content-center text-center mt-4'>
        <div className='card m-4'>
          <div className='card-header'>
            <h1 className='m-4'>Login</h1>
            <div className='card-body'>
              <dl>
                <dt className='m-1 fs-4'>UserName</dt>
                <dd><input type="text" className='rounded-4' name="Username" id="" /></dd>
                <dt className='m-1 fs-4'>Password</dt>
                <dd><input type="password" className='rounded-4' name="Password" id="" ></input></dd>
                <button className='btn btn-info'><span className='bi bi-arrow-right'></span>Login</button>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin