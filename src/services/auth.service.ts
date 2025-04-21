import AuthModel from "../models/auth.model";

const login = async () => {
    try {
        const users = await AuthModel.findAll({limit: 10});
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default { login };

