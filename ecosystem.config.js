module.exports = {
    apps: [
        {
            script: 'npm',
            cwd : './fe',
            args : 'start',
            name : "puzzle-fe",
            env : {
                PORT: 8000
            }
        },
        {
            script: 'npm',
            cwd : './be.prod',
            args : 'start',
            name : "puzzle-be"
        },
        {
            script: 'npm',
            cwd : './admin.prod',
            args : 'start',
            name : "puzzle-admin"
        },
    ],
};
