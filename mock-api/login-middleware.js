module.exports = (req, res, next) => {
    const login = 'a';
    const password = '1';

    if (req.method == 'POST' && req.path == '/login') {
        if (req.body.login === login && req.body.password === password) {
            res.status(200).json({login: req.body.login})
        } else {
            res.status(400).json({message: 'wrong password'})
        }
    } else {
        next()
    }
}