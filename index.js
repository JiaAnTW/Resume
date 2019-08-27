const content={
    chinese:{
        name:"張家銨",
        project:[
            {name:"無人餐廳點餐系統",skill:['html','css','javascript','vue.js','node.js','MySQL'],img:"./swr.png",link:"https://swruidd2019.herokuapp.com/#/",describe:"",code:""},
            {name:"成大轉系生心得分享平台",skill:['html','css','javascript','react.js','php','laravel','MySQL'],link:"https://merry.ee.ncku.edu.tw/~nckutrans/index.php#/",img:"./trans.png",describe:"大二下使用React.js + PHP Laravel + MySQL個人獨立製作。採前後端分離、前端渲染，包含RWD設計、會員系統。因為我是轉系生，在轉系的過程中遇到了一些資訊不透明所造成的困難，我希望能用這個平台幫助未來想申請轉系的成大生。",code:""},
            {name:"2019成大交管營",skill:['html','css','javascript','react.js'],img:"./tcmsmall.png",link:"http://wintercamp.tcm.ncku.edu.tw/#/",describe:"大二上使用create_react_app製作，包含手機版和電腦版。程式、美術設計、UI/UX設計、伺服器架設......跟網站有關一切皆為我自己製作。由於剛開始製作時自己的RWD技術不成熟，改以將電腦版網頁和手機版網頁架在不同伺服器，偵測使用者載具後導向對應網站。",code:"https://github.com/JiaAnTW/NCKU_TCM2019"},
            {name:"你看起來很想學C++",skill:['c++'],img:"./c++small.png",link:null,describe:"大一下專案作業，課程要求在Qt環境下加入多型、製作類似「雷霆戰機」的GUI遊戲。我將一般人學習C++的過程結合在遊戲中，並額外加入了成就紀錄系統，玩家在關掉遊戲後仍可保有其獲得成就，並能在下次遊玩時檢視。",code:"https://github.com/JiaAnTW/NCKU_1stGrade_3_CSProgramDesign2_Project3"}
        ],
        projectTopic:"作品",
        projectBtn:["了解更多","前往網站","看原始碼"],
        coding:["程式能力","熟悉","使用過"],
        edu:{
            topic:"學經歷",
            school:["國立成功大學交通管理學士班","國立成功大學資訊工程學士班","在學中(大三)"]
        }
    },
    english:{
        name:"Jia An Chang",
        project:[
            {name:"no man restaurant order system",skill:['html','css','javascript','vue.js','node.js','MySQL'],img:"./swr.png",link:"https://swruidd2019.herokuapp.com/#/",describe:"",code:"https://github.com/JiaAnTW/no_man_restaurant"},
            {name:"NCKU Trans",skill:['html','css','javascript','react.js','php','laravel','MySQL'],link:"https://merry.ee.ncku.edu.tw/~nckutrans/index.php#/",img:"./trans.png",describe:"",code:"https://github.com/JiaAnTW/NCKU_Trans"},
            {name:"Website of NCKU TCM camp 2019",skill:['html','css','javascript','react.js'],img:"./tcmsmall.png",link:"http://wintercamp.tcm.ncku.edu.tw/#/",describe:"A side project I made in 2rd grade with create_react_app, including PC and Mobile version. All of this website, namely coding, UI/UX design, art design, server setting, are made by myself. Since I was not familiar with RWD at that time, the way to fulfill RWD is set PC and Mobile version websites in different severs. When users visit the website, the javascript in header will decide which website they should see based on their device. ",code:"https://github.com/JiaAnTW/NCKU_TCM2019"},
            {name:"Do you want to learn C++ ?",skill:['c++'],img:"./c++small.png",link:null,describe:"A project of C++ course assignment in 1st grade. The basic requirement is that we have to make a playable GUI Shoot`em up game in Qt. Also, we must include polymorphism in our code. I tried combining the process of learning C++ into this game, and added an acheivement system in the project, which alows players to see their award whenever they open this game.",code:"https://github.com/JiaAnTW/NCKU_1stGrade_3_CSProgramDesign2_Project3"}
        ],
        projectTopic:"Project",
        projectBtn:["more","demo","source code"],
        coding:["Programming skill","Famliar with","Has experience with"],
        edu:{
            topic:"Education",
            school:["NCKU TCM","NCKU CSIE(computer science and information engineering)","now(junior)"]
        }
    }
} 

var nowLanguage="chinese";

const changeLanguage=()=>{
    nowLanguage=(nowLanguage=="chinese")?"english":"chinese";
    document.getElementById('language').innerHTML=(nowLanguage=="chinese")?"English version":"切換至中文";
    document.getElementsByClassName('name')[0].innerHTML=content[nowLanguage].name;
    document.getElementsByClassName('coding-topic')[0].innerHTML=content[nowLanguage].coding[0];
    document.getElementsByClassName('coding-level')[0].innerHTML=content[nowLanguage].coding[1];
    document.getElementsByClassName('coding-level')[1].innerHTML=content[nowLanguage].coding[2];
    document.getElementsByClassName('edu-topic')[0].innerHTML=content[nowLanguage].edu.topic;
    document.getElementsByClassName('school')[0].innerHTML=content[nowLanguage].edu.school[0];
    document.getElementsByClassName('school')[1].innerHTML=content[nowLanguage].edu.school[1];
    document.getElementsByClassName('now')[0].innerHTML=content[nowLanguage].edu.school[2];

    document.getElementsByClassName('project-topic')[0].innerHTML=content[nowLanguage].projectTopic;
    content[nowLanguage].project.forEach((Element,Index)=>{
        document.getElementsByClassName('card-title')[Index].innerHTML=Element.name;
        document.getElementsByClassName('card-text')[Index].innerHTML=Element.describe.substr(0,100)+"(...)";
        document.getElementsByClassName('open')[Index].innerHTML=content[nowLanguage].projectBtn[0];
    })
    document.getElementById('link').innerHTML=content[nowLanguage].projectBtn[1];
    document.getElementById('code').innerHTML=content[nowLanguage].projectBtn[2];
}

var nowHandle=0;

content[nowLanguage].project.forEach((Element,Index)=>{
    var tag='';
    Element.skill.forEach(element=>{
        tag+='<span class="badge badge-dark">'+element+'</span>'
    })
    const oldCode=$('.project-box').html();
    $('.project-box').html(oldCode+'<div class="card" style="width: 18rem;"><img src="'+Element.img+'"class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+Element.name+'</h5><p class="card-text">'+Element.describe.substr(0,50)+'(...)</p><button class="btn btn-dark open" onclick="openModal('+Index+')" id="open" data-toggle="modal" data-target="#exampleModal">了解更多</button></div></div>')
})

/*$('#open').click(function(){
    document.getElementById("modal-img").setAttribute("src", content["chinese"].project[1].img);
    document.getElementsByClassName("modal-title")[0].innerHTML=content["chinese"].project[1].name;
    document.getElementsByClassName("modal-body")[0].innerHTML=content["chinese"].project[1].describe;
})*/


const openModal=(Index)=>{
    nowHandle=Index;
    var tag='';
    content[nowLanguage].project[Index].skill.forEach(element=>{
        tag+='<span class="badge badge-dark">'+element+'</span>'
    })
    document.getElementById("modal-img").setAttribute("src", content[nowLanguage].project[Index].img);
    document.getElementById("skill").innerHTML=tag;
    document.getElementsByClassName("modal-title")[0].innerHTML=content[nowLanguage].project[Index].name;
    document.getElementsByClassName("modal-body")[0].innerHTML=content[nowLanguage].project[Index].describe;
    if(content[nowLanguage].project[Index].link===null)
        $("#link").hide();
    else
        $("#link").show();
}

const openLink=()=>{
    window.open(content[nowLanguage].project[nowHandle].link, '_blank');
}

const openGithub=()=>{
    window.open(content[nowLanguage].project[nowHandle].code, '_blank');
}