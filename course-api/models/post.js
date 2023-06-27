const db = require('../util/db');

module.exports = class Post{
    constructor(title,imageUrl,content,creator){
        this.title = title;
        this.imageUrl = imageUrl;
        this.content = content;
        this.creator = creator;
        this.createdAt = new Date(); 
        this.timestamp = new Date();
    }

    save(){
        return db.execute(
            'INSERT INTO post (title, imageUrl, content, creator, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)',
            [this.title,this.imageUrl,this.content,this.creator,this.createdAt,this.timestamp]
        )
    }
}