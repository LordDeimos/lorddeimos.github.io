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
});

var load = function(child){
    var em = parseFloat($(`#${child.id}`).parent().css('font-size'));
    var rem = parseFloat($(`html`).css('font-size'));
    var per = parseFloat($(`html`).width()/100);
    if(child.active){
        $(`#${child.id}`).parent().css('max-height',((4*per)+(1.25*em)+$(`#${child.id}`).outerHeight()).toString()+'px');
    }
    else{
        $(`#${child.id}`).parent().css('max-height',(2*per)+(1.25*em)+'px');
    }
}

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

Vue.component('prog-langs',{
    template:`
    <div>
        Some of the Languages I have skills in include the following:
        <p class="skills">
            <!--C-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <path fill="#659AD3" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                    <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                </svg>
            </span>
            <!--C++-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <path fill="#D26383" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                    <path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                    <path d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
                    <path fill="#fff" d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
                </svg>
            </span>
            <!--C#-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <path fill="#9B4F96" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                    <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1l1.2-6.2h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7h3.3zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
                </svg>
            </span>
            <!--Java-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path>
                    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path>
                    <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                </svg>
            </span>
            <!--Nodejs-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
            </span>
            <!--Python-->
            <span class="icon is-large">
                <svg viewBox="0 0 128 128">
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                        <stop offset="0" stop-color="#5A9FD4" />
                        <stop offset="1" stop-color="#306998" />
                    </linearGradient>
                    <path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                    />
                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                        <stop offset="0" stop-color="#FFD43B" />
                        <stop offset="1" stop-color="#FFE873" />
                    </linearGradient>
                    <path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                    />
                    <radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498" />
                        <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
                    </radialGradient>
                    <path fill="url('#a')" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"></path>
                    <path fill="url('#b')" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"></path>
                    <path opacity=".444" fill="url('#c')" enable-background="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                </svg>
            </span>
        </p>
    </div>`
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

Vue.component('skill-child',{
    props:['child'],
    template:`
    <transition name="fade-down" tag="div" mode="out-in">
        <div v-if="child.active" v-bind:id="child.id" style="margin-top:2%">
            <prog-langs v-if="child.text==='prog-langs'"></prog-langs>
            <div :id="child.id" v-else>
                {{child.text}}
            </div>
        </div>
    </transition>`,
    mounted:function(){
        load(this.child);
    },
    updated:function(){        
        load(this.child);
    }
});

Vue.component('skill-item',{
    props:['skill','child','id'],
    template:`
    <li :id="id" v-on:click="showChild(child,id)" class="accordian" :class="{open:child.active}"
        style="display:flex;flex-direction:column;align-items:flex-start;max-height:58.4px">
        <div class="has-icon-left" style="display:flex;flex-direction:row;width:100%">
            <span class="icon is-left">
                <i :class="skill.icon"></i>
            </span>
            <h4>{{ skill.text }}</h4>
        </div>
            <skill-child v-bind:child="child"></skill-child>
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
        <div style="dislpay:flex;flex-direction:column;width:100%">
            <h4><a :href="repo.html_url">{{repo.name}}</a></h4>
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
            <h2>{{text}}</h2>
            <transition name="fade" mode="out-in">     
                <p class="abs" v-if="index===0">About Text</p>
            </transition>
            <transition name="fade" mode="out-in"> 
                <ul class="abs repo-list" v-if="index===1">
                    <repo-item v-for="repo in repos" v-if="repo.name!=='lorddeimos.github.io'" v-bind:repo="repo"></repo-item>
                </ul>
            </transition>
            <transition name="fade" mode="out-in"> 
                <ul class="abs skill-list" v-if="index===2">
                    <skill-item v-for="skill in skills" v-bind:skill="skill" :child="skill.child" :id="skill.id" ></skill-item>
                </ul>
            </transition>
            <transition name="fade" mode="out-in"> 
                <div class="has-text-centered" v-if="index===3" style="display:flex">
                    <a href="https://github.com/LorDeimos" target="_blank">
                        <span class="icon is-large">
                            <i class="fab fa-github fa-2x"></i>
                        </span>
                    </a>
                    <a href="mailto:alexjbarnier@gmail.com">
                        <span class="icon is-large">
                            <i class="fas fa-envelope fa-2x"></i>
                        </span>
                    </a>
                </div>
            </transition>
        </div>
        </div>
        <div style="height:10%"></div>
    </div>`,
    data:function(){
        return{
            skills:[
                {id:"softeng",text:"Software Engineering", icon:"fas fa-2x fa-code",child:{id:"progs",text:"prog-langs",active:true}},
                {id:"teach",text:"Teaching", icon:"fas fa-2x fa-chalkboard-teacher",child:{id:"teach-c",text:"As part of the STIMulate program I have experience...",active:false}},
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
        construction:true
    }
});