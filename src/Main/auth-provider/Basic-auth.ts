const createJWTAuthorizationHeader = (token: string) => `Bearer ${token}`
export default createJWTAuthorizationHeader
