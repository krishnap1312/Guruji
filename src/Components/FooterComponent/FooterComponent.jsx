import React from 'react'

function FooterComponent() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
            <div>
                <h2>Customer Service</h2>
                <p className="me-3"><span className='bi bi-telephone-fill me-3'></span>1800584711</p>
                <p className="me-3"><span className='bi bi-telephone-fill me-3'></span>1800549551</p>
                <p className="me-3"><span className='bi bi-telephone-fill me-3'></span>1800549552</p>
            </div>
            <div>
                <h2>Links</h2>
                <h5>FD Rates</h5>
                <h5>Our Team</h5>
                <h5>Support</h5>
            </div>
            <div>
                <h2>Social Media</h2>
                <h5><span className='bi bi-facebook'></span> FaceBook</h5>
                <h5><span className='bi bi-instagram'></span> Instagram</h5>
                <h5><span className='bi bi-youtube'></span> Youtube</h5>
                <h5></h5>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent