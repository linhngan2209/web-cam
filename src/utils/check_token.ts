import { jwtDecode } from 'jwt-decode';

interface Hardware {
    id: string;
}

export const checkToken = (
    router: any,
    hardwares: Hardware[] 
): boolean => {

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token || typeof token !== 'string') {
        console.warn('Token không tồn tại hoặc không hợp lệ.');
        router.push('/login');
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);

        if (!decodedToken.exp) {
            console.warn('Token không có trường exp.');
            localStorage.removeItem('token');
            router.push('/login');
            return false;
        }

        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        if (currentTime >= expirationTime) {
            console.warn('Token đã hết hạn.');
            localStorage.removeItem('token');
            router.push('/login');
            return false;
        }

        if (hardwares && hardwares.length > 0) {
            const firstHardwareId = hardwares[0].id;
            router.replace(`/authenticated/hardware/${firstHardwareId}`);
        } else {
            router.replace('/');
        }

        return true;
    } catch (error) {
        console.error('Lỗi khi giải mã token:', error);
        localStorage.removeItem('token');
        router.push('/login');
        return false;
    }
};