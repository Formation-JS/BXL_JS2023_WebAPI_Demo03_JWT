import { decodeJwt } from '../utils/jwt.utils.js';

export const authTokenMiddleware = () => {

    /**
     * Middleware traitement de token de la requete
     */
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