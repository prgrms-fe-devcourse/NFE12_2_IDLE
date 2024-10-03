import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); 

        // 로그인 페이지로 리디렉션
        navigate('/signin'); // 로그인 페이지의 경로로 변경
    };

    return (
        <button onClick={handleLogout} className="signOut-button">
            sign out
        </button>
    );
};

export default SignOutButton;
