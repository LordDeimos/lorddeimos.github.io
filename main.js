var app;
var repos;
$(document).ready(()=>{
    $.get("https://api.github.com/users/lorddeimos/repos",(data)=>{
        repos = data;
        app.repos = repos;
    });
    $('html').bind('wheel',(event)=>{
        var change = false;
        if(event.originalEvent.deltaY>0&&app.index<3){
            app.index+=1;
            change = true;
        }
        else if(event.originalEvent.deltaY<0&&app.index>0){
            app.index-=1;
            change = true;
        }
        app.buttons.forEach(element => {
            if(element.id===app.index&&change){
                $(`.menu-list>li`)[app.index].click();
            }
        });
    });
    $(document).keydown((event)=>{
        var change = false;
        switch(event.which){
            case 38:
                if(app.index>0){
                    console.log("up")
                    --app.index;
                    change = true;
                }
                break;
            case 40:
                if(app.index<3){
                    console.log(app.index)
                    ++app.index;
                    console.log(app.index)
                    change = true;
                }
                break;
            default:return;
        }
        
        console.log(app.index)
        app.buttons.forEach(element => {
            console.log("yes")
            if(element.id===app.index&&change){
                $(`.menu-list>li`)[app.index].click();
            }
        });
    });
});


Vue.component('list-button',{
    props:['prop'],
    template:`
            <li v-on:click="select(prop)" >
                <a class='sidebar-link has-text-centered' v-bind:class="{'selected':prop.active, 'has-text-grey':prop.active }">
                    <p style="flex: 1;align-self: center;">{{ prop.text }}</p>
                </a>
            </li>`,
    methods:{
        select:function(prop){
            prop.active = true;
            app.titleText = prop.titleText;
            app.index = prop.id;
            app.buttons.forEach(element => {
                element.active = element.id===prop.id;
            });
        }            
    }
});

Vue.component('sidebar',{
    props:['buttons'],
    template:`
            <div class="sidebar column is-one-quarter has-background-grey has-text-white-bis has-text-centered">
                <div class="content has-text-centered head">
                    <figure class="image is-128x128" style="align-items:center">
                        <img src="assets/avatar.png">
                    </figure>
                    <h1>Alex Barnier</h1>
                    <p class="catch has-text-grey-lighter">A massive nerd who programs for fun.</p>
                </div>
                <div style="flex:1">
                    <ul class="menu-list">
                        <list-button v-for="item in buttons" v-bind:prop="item"></list-button>
                    </ul>
                </div>
                <footer style="padding-top:25%">
                    <div class="tech-foot content has-text-centered">
                        <div>Technologies Used Here</div>
                        <div>
                            <a href="https://bulma.io" target="_blank">
                                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                            </a>

                            <a href="https://vuejs.org" target="_blank">
                                <span class="icon is-medium">
                                    <i class="fab fa-vuejs fa-lg"></i>
                                </span>
                            </a>
                            <a href="https://jquery.com" target="_blank">
                                <span class="icon">
                                    <svg class="jq" viewBox="0 0 128 128">
                                        <path d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
                                    </svg>
                                </span>
                            </a>
                            <a href="https://fontawesome.com" target="_blank">
                                <span class="icon is-medium">
                                    <i class="fab fa-font-awesome-flag fa-lg"></i>
                                </span>
                            </a>
                            <a href="http://konpa.github.io/devicon/" target="_blank">
                                <span class="icon">
                                    <svg class="dev" viewBox="0 0 128 128">
                                        <path id="plain" class="cls-1" d="M64,7.83H4.77L14.95,95.13l49,25,.06,0,49.07-25L123.23,7.83Zm42.77,54.86c0,.88,0,1.67-.77,2L73.25,80.44l-2.42,1.13-.27-3.15V72.23l.24-1.57,1.09-.47L95.07,59.81l-21.54-9.6L64.35,68.34,58.9,78.87l-1.22,2.27-2.05-.9L22,64.71a2.42,2.42,0,0,1-1.45-2V56.91a2.39,2.39,0,0,1,1.42-2l34-15.73,3.21-1.44v9.66l.24,1.34-1.56.7L34.45,59.79,56.3,69.42l8.05-16,6.21-12.65,1.13-2.28,1.81.91L106,54.89c.73.35.76,1.14.76,2Z"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>`
});

Vue.component('skill-item',{
    props:['skill','id'],
    template:`
    <li :id="id" class="has-icon-left">
            <span class="icon is-left">
                <i :class="skill.icon"></i>
            </span>
            <h4 style="padding:0 0 0 7%;width:15rem">{{ skill.text }}</h4>
        </div>
    </li>`,
    methods:{
        showChild:function(child,id){
            child.active = !child.active;
        }
    }
});

Vue.component('repo-item',{
    props:['repo'],
    template:`
    <li class="has-icon-left">
        <span class="icon is-left">
            <i :class='["fas fa-2x",{"fa-code-branch":repo.fork,"fa-book":!repo.fork}]'></i>
        </span>
        <div style="dislpay:flex;flex-direction:column;width:100%;padding:2%">
            <h4><a :href="repo.html_url" target="_blank">{{repo.name}}</a></h4>
            <p>{{repo.description}}</p>
        </div>
    </li>`
});

Vue.component('mainpanel',{    
    props:['text','index','repos'],
    template:`
    <div class="column is-paddingless" style="background-color: whitesmoke" style="display:flex;flex:1;flex-direction:column;">
        <div style="height:20%"></div>
        <div class="info content is-marginless" style="height:70%; background-color:rgba(255, 255, 255, 0.8)">
            <div class="abs">  
            <h1>{{text}}</h1>
            <transition name="fade" mode="out-in">     
                <p class="abs" v-if="index===0" style="font-size:1.2em">
                My name is Alex Barnier, a software engineering student at the Queensland Univeristy of Technology. I love to program anything I can think of.
                 In addition to my studies, I became part of
                the <a href='https://stimulate.qut.edu.au' target="_blank">STIMulate</a> program, where I have been given the opporunity to gain skills beyond my degree<br/><br/>
                I am always looking for new ways to gain knowledge, whether by learing a new programming language, or taking on new leadership responsibilites at university.</p>
            </transition>
            <transition name="fade" mode="out-in"> 
                <div class="abs" v-if="index===1">
                    <h5>Here are some of the projects I am working on. I mainly use these as ways to gain skills in areas I am less familliar with.</h5>
                    <ul class="repo-list">
                        <repo-item v-for="repo in repos" v-if="repo.name!=='lorddeimos.github.io'" v-bind:repo="repo"></repo-item>
                    </ul>
                </div>
            </transition>
            <transition name="fade" mode="out-in">
                <div class="abs" v-if="index===2">
                    <h5>Through personal interset and university, I have gained skills in both programming and leadership</h5>
                    <ul class="abs skill-list">
                        <skill-item v-for="skill in skills" :skill="skill" :id="skill.id" ></skill-item>
                    </ul>
                </div>
            </transition>
            <transition name="fade" mode="out-in"> 
                <div v-if="index===3">
                    <h5>Here are the main points of contact if you wish to reach me:</h5>
                    <div class="has-text-centered" style="display:flex">                        
                        <a href="https://github.com/LordDeimos" target="_blank">
                            <span class="icon is-large">
                                <i class="fab fa-github fa-2x"></i>
                            </span>
                        </a>
                        <a href="mailto:alexjbarnier@gmail.com">
                            <span class="icon is-large">
                                <i class="fas fa-envelope fa-2x"></i>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/alex-barnier-224b81127/">
                            <span class="icon is-large">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </transition>
        </div>
        </div>
        <div style="height:10%"></div>
    </div>`,
    data:function(){
        return{
            skills:[
                {id:"softeng",text:"Software Engineer", icon:"fas fa-2x fa-code"},
                {id:"commun",text:"Effective Comminucator", icon:"fas fa-2x fa-chalkboard-teacher"},
                {id:"",text:"Problem Solver", icon:"fas fa-2x fa-bolt"},
                {id:"",text:"Quick Learner", icon:"fas fa-2x fa-graduation-cap"}
            ],
        }
    }
});

app = new Vue({
    el:'#root',
    data:{
        buttons:[
            {text:'About', active:true, id:0, titleText:"About Me"},
            {text:'Projects', active:false, id:1, titleText:"What I'm Working On"},
            {text:'Skills', active:false, id:2, titleText:"What I Can Do"},
            {text:'Contact', active:false, id:3, titleText:"You Can Find Me..."}
        ],
        titleText:'About Me',
        index:0,
        repos:repos,
        construction:false
    }
});