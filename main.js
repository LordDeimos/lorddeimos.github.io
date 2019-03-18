var app;
var repos;
$(document).ready(()=>{
    $.get("https://api.github.com/users/lorddeimos/repos",(data)=>{
        repos = data;
        app.repos = repos;
    });
});


Vue.component('list-button',{
    props:['prop'],
    template:`
            <li>
                <a v-on:click="select(prop)" :href="'#'+prop.id" class='sidebar-link has-text-centered' v-bind:class="{'selected':prop.active, 'has-text-grey':prop.active }">
                    <p style="flex: 1;align-self: center;">{{ prop.text }}</p>
                </a>
            </li>`,
    methods:{
        select:function(prop){
            prop.active = true;
            app.buttons.forEach(element => {
                element.active = element.id===prop.id;
            });
            /*$('div.info').animate({
                scrollTop: $(`#${prop.id}`).offset().top//+$('#spacer').height()
            }, 2000);*/
        }            
    }
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

app = new Vue({
    el:'#root',
    data:{
        buttons:[
            {text:'About', active:true, id:0},
            {text:'Projects', active:false, id:1},
            {text:'Skills', active:false, id:2},
            {text:'Contact', active:false, id:3}
        ],
        index:0,
        repos:repos,
        skills:[
            {id:"softeng",text:"Software Engineer", icon:"fas fa-2x fa-code"},
            {id:"commun",text:"Effective Comminucator", icon:"fas fa-2x fa-chalkboard-teacher"},
            {id:"",text:"Problem Solver", icon:"fas fa-2x fa-bolt"},
            {id:"",text:"Quick Learner", icon:"fas fa-2x fa-graduation-cap"}
        ],
    }
});