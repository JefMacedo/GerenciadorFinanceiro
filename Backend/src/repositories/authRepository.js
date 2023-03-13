const { prisma } = require("../services/prismaService");

exports.getUser = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    return user;
};