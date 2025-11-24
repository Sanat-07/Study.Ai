import {  useQuery } from '@tanstack/react-query';
import {User} from "@/shared/types/auth.ts";
import {getCurrentUser, isAuthenticated} from "@/shared/api/endpoints/auth.api.ts";

export const useCurrentUser = () => {
    return useQuery<User | null, Error>({
        queryKey: ['currentUser'],
        queryFn: () => {
            const user = getCurrentUser();
            return user;
        },
        enabled: isAuthenticated(),
        staleTime: 1000 * 60 * 5,
    });
};