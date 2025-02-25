const screen = { 
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                        <img src ="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                        <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                             <br>
                             <hr>
                            <div class="social-data">
                               <div class ="followers-data">
                                   <h4>👥Followers</h4>
                                   <p>${user.followers ?? 'Não possui bio cadastrada'}</p>
                               </div>
                               <div class ="following-data">
                                    <h4>👥Following</h4>
                                   <p>${user.following ?? 'Não possui bio cadastrada'}</p>
                               </div>
                            </div>
                        </div>
                    </div>`

let repositoriesItens = ''
       user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank"> ${repo.name} <div class="squareRepoItems"> <span>🍴${repo.forks_count}</span> <span>⭐${repo.stargazers_count}</span> <span> 👀${repo.watchers_count}</span> <span>👨‍💻${repo.language ?? 'Sem linguagem :('}</span> </div> </a>
         </li>`)
       
       if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                          <hr>
                                          <br>
                                         <h2>Repositories</h2>
                                          <ul>${repositoriesItens}</ul>
                                            <hr>
                                        </div>`                               
       }

let eventsItens = ''
       user.event.forEach(event => { 
        if (event.type === "PushEvent"){
            eventsItens += `<li><strong style="font-weight: bold">${event.repo.name}</strong> - ${event.payload.commits[0].message}</li>`
        } else if (event.type === "CreateEvent"){ 
            eventsItens += `<li><strong style="font-weight: bold">${event.repo.name}</strong> - Sem mensagem de commit </li>`
        }  
        })
        
        if(user.event.length > 0){
        this.userProfile.innerHTML += `<div class="events">
                                          <h2>Events</h2>
                                       </div>
                                          <ul>${eventsItens}</ul>`
                                        }
    },

    renderNotFound(){ 
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }


