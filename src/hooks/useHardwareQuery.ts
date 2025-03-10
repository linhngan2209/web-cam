import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/contexts/AuthenticationContext';
import axiosInstance from '@/services/apiClient';

interface Hardware {
    id: string;
    hardware_name: string;
}

const fetchHardwares = async (): Promise<Hardware[]> => {
    const response = await axiosInstance.get('/api/user/get-user-hardware', {
        params: { limit: 10, page: 1 },
        timeout: 10000,
    });
    return response.data.data || [];
};

export const useHardwareQuery = (shouldRedirect = false) => {
    const { isLoggedIn } = useAuth();
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['hardwares'],
        queryFn: fetchHardwares,
        enabled: !!isLoggedIn, 
    });

    const refreshHardwares = () => {
        queryClient.invalidateQueries({ queryKey: ['hardwares'] });
    };

    return {
        ...query,
        hardwares: query.data || [],
        refreshHardwares,
    };
};
