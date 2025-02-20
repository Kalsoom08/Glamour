import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User Created:', response.user);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2"
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2"
            />
            <button className='bg-purple-500 px-5' onClick={handleSignUp}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
