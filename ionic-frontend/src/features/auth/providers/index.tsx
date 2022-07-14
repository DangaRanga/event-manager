import { createContext } from "react";
import { JWT } from "../types/jwt";

/**
 * Context interface for AuthAuthentication/Authorization
 *
 * @property isAuthenticated
 *
 * @interface
 */
interface AuthDefaultContext {
  jwt: JWT;
}

function AuthContextCreator() {
  const AuthContext = createContext<AuthDefaultContext>({
    jwt: { token: null },
    // updateJWT: (_v: string | null) => "" as any,
  });

  return AuthContext;
}

const AuthContext = AuthContextCreator();

export default AuthContext;
