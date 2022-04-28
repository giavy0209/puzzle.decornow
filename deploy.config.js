module.exports = {
    deploy: {
        production: {
            "key": "./myvpssing",
            "user": "root",
            "host": ["167.71.219.125"],
            "path": ".",
            "repo" : "https://github.com/giavy0209/puzzle.decornow.git",
            "ref"  : "origin/main",
            "pre-deploy" : "npm run build",
            "post-deploy" : "pm2 restart ecosystem.config.js"
        }
    }
};