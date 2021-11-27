const router = require('express').Router();
const {Post, Comment, User} = require('../models');
const withAuth = require('../utils/auth');

// Go to homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const posts = postData.map((post) => post.get({ plain: true}));
        res.render('homepage', {
            posts, 
            loggedIn: req.session.loggedIn,

        });
    } catch (err) {
        res.status(500).json(err);
    }
});
