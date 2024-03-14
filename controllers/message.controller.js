const messageController = {

    hello: async (req, res) => {

        res.status(200)
           .json({
                message: 'Hello World !'
           });
    },

    protected: async (req, res) => {

        res.status(200)
        .json({
             message: 'Bonjour...'
        });
    },
    
    admin: async (req, res) => {

        res.status(200)
        .json({
             message: 'Bonjour admin 🤩'
        });
    }
};

export default messageController;