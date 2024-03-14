import memberService from '../services/member.service.js';

const authController = {

    login: async (req, res) => {
        const data = req.body;

        // Validation
        if(!data || !data.username || !data.password) {
            res.status(422)
               .json({
                    errorMessage: 'Invalide data'
               });
            return;
        }

        // Login via le service
        const member = memberService.login(data.username, data.password);

        if(!member) {
            res.status(400)
               .json({
                    errorMessage: 'Invalide credential'
               });
            return;
        }

        // TODO Create et send a JWT !
        res.sendStatus(204);
    }
}

export default authController;