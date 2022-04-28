module.exports = {
    apps: [
        {
            script: 'npm',
            cwd : './fe',
            arg : 'start',
            name : "puzzle-fe",
            env : {
                PORT: 8000
            }
        },
        {
            script: 'npm',
            cwd : './be.prod',
            arg : 'start',
            name : "puzzle-be"
        },
        {
            script: 'npm',
            cwd : './admin.prod',
            arg : 'start',
            name : "puzzle-admin"
        },
    ],
};
