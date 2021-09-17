import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'User One',
        email: 'userone@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'User Two',
        email: 'usertwo@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users