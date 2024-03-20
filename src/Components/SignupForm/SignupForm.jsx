import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css'; 
import { MdDriveFileRenameOutline,MdEmail,MdLocationPin } from "react-icons/md";
import { FaUser,FaLock,FaUserLock,FaMobile,FaAddressCard,FaCamera } from "react-icons/fa";
function SignUpForm() {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [profilePhotoURL, setProfilePhotoURL] = useState(null);
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePhoto(file);
        setProfilePhotoURL(URL.createObjectURL(file));
    };
  return (
    <div className='wrapper-signup'>
        <form action=''>
            <h1>Sign Up</h1>

            <div className='photo-div'>
                    {profilePhotoURL ? (
                        <img className='uploaded-photo' src={profilePhotoURL} alt='Profile' />
                    ) : (
                        <label htmlFor='profilePhoto' className='file-upload-label'>
                            <FaCamera className='camera-icon' />
                        </label>
                    )}
                    <input
                        type='file'
                        id='profilePhoto'
                        accept='image/*'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>

            <div className='input-row'>
                <div className='input-box'>
                    <input type='text' placeholder='Your Name' required />
                    <MdDriveFileRenameOutline className='icon' />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
            </div>

            <div className='input-row'>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Confirm Password' required />
                    <FaUserLock className='icon' />
                </div>
            </div>

            <div className='input-row'>
                <div className='input-box'>
                    <input type='email' placeholder='E-mail' required />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type='number' placeholder='Phone number' required />
                    <FaMobile className='icon' />
                </div>
            </div>

            <div className='input-row'>
                <div className='input-box'>
                    <input type='text' placeholder='Address' required />
                    <FaAddressCard className='icon' />
                </div>
                <div className='input-box'>
                    <input type='number' placeholder='Pin number' required />
                    <MdLocationPin className='icon' />
                </div>
            </div>

            <div className='terms'>
                <label><input type='checkbox' />I agree to be bound by the project <a>service terms</a> </label>
            </div>
            <button type='submit'>Sign up</button>
            
            <div className='Registered'>
                <p>Already registered? <Link to='/login'>Sign in</Link></p>
            </div>
        </form>
    </div>
  );
}

export default SignUpForm;
