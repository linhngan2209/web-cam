'use client';
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthenticationContext';
import Loading from '@/components/Loading';
import { useHardwareQuery } from '@/hooks/useHardwareQuery'; // Import useHardwareQuery

interface UserCredentials {
    email: string;
    password: string;
}

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
    passwordVisible: boolean;
    togglePasswordVisibility: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    password,
    setPassword,
    passwordVisible,
    togglePasswordVisibility
}) => (
    <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black focus:text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        {password && (
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 bottom-1 transform -translate-y-1/2 text-gray-600"
                aria-label="Toggle password visibility"
            >
                {passwordVisible ? <FaEye />:<FaEyeSlash />}
            </button>
        )}
    </div>
);

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { login } = useAuth();
    const router = useRouter();

    const { hardwares, isLoading: isHardwareLoading } = useHardwareQuery(true);

    const isFormValid = email.includes('@') && password.length >= 6;

    const togglePasswordVisibility = useCallback((): void => {
        setPasswordVisible(prev => !prev);
    }, []);

    const handleLogin = useCallback(async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        if (!isFormValid) {
            setError('Please enter a valid email and password (min 6 characters)');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const user: UserCredentials = { email, password };
            const userLogin = { ...user, remember: true };
            const loginError = await login(userLogin);

            if (loginError) {
                setError(loginError);
            }
            else {
                router.push(`authenticated/hardware/${hardwares[0].id}`);
            }
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [email, password, isFormValid, login]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[rgb(243,244,246)]">
            <div className={`flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden ${isLoading ? 'opacity-50' : ''}`}>
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="mb-6 max-w-[350px] lg:max-w-[400px]"
                    />
                </div>

                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black focus:text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <PasswordInput
                            password={password}
                            setPassword={setPassword}
                            passwordVisible={passwordVisible}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 mt-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-center items-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="mr-2">Logging in</span>
                                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </>
                            ) : 'Login'}
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-600 mt-4">
                        <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700">Forgot password?</a>
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Login;