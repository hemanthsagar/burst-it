import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulargame001';
  image1="white";
  image2="white";
  image3="white";
  image4="white";
  image5="white";
  image6="white";
  image7="white";
  image8="white";
  image9="white";
  buttonstate="start";
  score1=0;
  score=0;
  userscore=0;
  thisintervel;

  
  startorstop1()
  {
    this.image1="white";
    this.image2="white";
    this.image3="white";
    this.image4="white";
    this.image5="white";
    this.image6="white";
    this.image7="white";
    this.image8="white";
    this.image9="white";
    this.score = +((Math.floor(Math.random() * 6) + 1).toString());
    switch(this.score)
    {
      case 1 : this.image1="blue baloon";
              break;
      case 2 : this.image2="blue baloon";
              break;
      case 3 : this.image3="blue baloon";
              break;
      case 4 : this.image4="blue baloon";
              break;
      case 5 : this.image5="blue baloon";
              break;
      case 6 : this.image6="blue baloon";
              break;
      case 7 : this.image7="blue baloon";
              break;
      case 8 : this.image8="blue baloon";
              break;
      case 9 : this.image9="blue baloon";
              break;
    }
 
  }

  startorstop()
  {
    
    if(this.buttonstate.localeCompare( "start")===0)
    {
      this.thisintervel = setInterval(()=> { this.startorstop1() }, 2 * 600);
      this.buttonstate="stop";
    }
    else
    {
      clearInterval(this.thisintervel);
      this.image1="white";
    this.image2="white";
    this.image3="white";
    this.image4="white";
    this.image5="white";
    this.image6="white";
    this.image7="white";
    this.image8="white";
    this.image9="white";
    this.score=0;
      this.buttonstate="start";
    }
   
  }

  click1()
  {
    if(this.score==1 && this.buttonstate.localeCompare( "stop")===0)
    {
        this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click2()
  {
    if(this.score==2 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click3()
  {
    if(this.score==3 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click4()
  {
    if(this.score==4 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click5()
  {
    if(this.score==5 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click6()
  {
    if(this.score==6 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click7()
  {
    if(this.score==7 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click8()
  {
    if(this.score==8 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }
  click9()
  {
    if(this.score==9 && this.buttonstate.localeCompare( "stop")===0)
    {
      this.playburstAudio();
        this.score1=this.score1+5;
        if(this.score1>this.userscore)
            this.userscore=this.score1;
    }
    else
    {
      this.playerrorAudio();
      this.score1=0;
      if(this.score!=0)
        this.startorstop();
    }
  }

  playburstAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/burst.mp3";
    audio.load();
    audio.play();
  }

  playerrorAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/error.mp3";
    audio.load();
    audio.play();
  }
  
  
}
