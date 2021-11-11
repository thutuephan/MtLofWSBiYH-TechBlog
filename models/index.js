const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Set up associations
// User has many posts (One to Many)
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User has many comments (One to Many)
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})
