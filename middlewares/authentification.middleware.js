import { decodeJwt } from '../utils/jwt.utils.js';

/**
 * Middleware d'authentification par Bearer token (JWT)
 */
export const authTokenMiddleware = () => {

    return (req, res, next) => {
        
        // Récuperation de l'authentification : Bearer eyJhbGciOiJIUzUxMiIsInR...
        const authHeader = req.headers['authorization'];

        // Récuperation du JWT (format string / sans "Bearer ")
        const token = authHeader && authHeader.split(' ')[1];

        // Si aucun JWT -> Fin du middleware
        if(!token) {
            next();
            return;
        }

        // Si JWT -> Décoder et il est ajouter à "req.token"
        decodeJwt(token)
            .then((data) => {
                req.token = data;
                next();
            })
            .catch((error) => {
                res.status(400).json({ errorMessage: 'Invalid JWT' });
            });
    }
}

/**
 * Middleware d'autorisation via le token
 */
export const authorizeMiddleware = (...roles) => {

    return (req, res, next) => {

        // Récuperation du Token d'identification
        const token = req.token;

        // Si pas de token -> Erreur 401 Unauthorized
        if(!token) {
            res.sendStatus(401);
            return;
        }

        // Si le role n'est pas valide -> Erreur 403 
        if(roles.length > 0 && !roles.includes(token.role)) {
            res.sendStatus(403);
            return;
        }

        // Sinon, la requete est validé !
        next();
    }
}