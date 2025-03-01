const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    event: [],
    setInfo(gitHubUser) { 
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following 
    },
    setRepositories(repositories){ 
        this.repositories = repositories
    },
    setEvents(event){ 
        this.event = event
    }
}

export { user }

console.log(user)
