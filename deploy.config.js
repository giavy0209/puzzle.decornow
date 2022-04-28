module.exports = {
    deploy: {
        production: {
            "key": "./myvpssing",
            "user": "root",
            "host": ["167.71.219.125"],
            "path": "/root/code/",
            "repo" : "https://github.com/giavy0209/puzzle.decornow.git",
            "ref"  : "origin/main",
            "post-deploy" : "npm run build && pm2 restart ecosystem.config.js",
        }
    }
};