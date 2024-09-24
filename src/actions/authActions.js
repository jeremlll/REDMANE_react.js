export const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    return {
        type: 'LOGIN',
    };
};

export const logout = () => {
    localStorage.removeItem('isLoggedIn');
    return {
        type: 'LOGOUT',
    };
};