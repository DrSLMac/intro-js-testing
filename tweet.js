class Tweet {
  constructor(userName, userContent, userLink) {
    this.sender = userName;
    this.content = userContent;
//allow to contain a link,
//and if no link provided, return "no link provided"
    this.link = userLink || 'no link provided';
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
    this.retweets = 0;
  }
  like() {
    this.likes++
  }
  retweet() {
    this.retweets++
  }
}



module.exports = Tweet;
