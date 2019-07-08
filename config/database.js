module.exports = {
    dbPool: {
        user: process.env.HR_USER || `agritrade`,
        password: process.env.HR_PASSWORD || `superagritrade`,
        connectString: process.env.HR_CONNECTIONSTRING || `192.168.171.131/XE`,
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
};
