var Video = function(){
    // Vars
    this.refreshTimer = 100;
    this.player=videojs("playervideo");
    this.$video = $("#playervideo");
    this.$progress = $("#panelProgress");
    this.scope$playing=[function(){},function(){}];

    this.duration = function()
    {
        return this.player.duration();
    }

    this.currentTime = function()
    {
        return this.player.currentTime();
    }

    this.$updateProgress = function()
    {
        var perc = this.currentTime() * 100 / this.duration();
        this.$progress.css("width", perc+'%');
    }

    this.add$playing = function(f)
    {
        this.scope$playing[0]=f;
    }

    this.remove$playing = function(name)
    {
        this.scope$playing[0]=function(){};
    }

    this._playing = function(f)
    {
        var video$this = this;
        this.player.on("timeupdate", function(){
            video$this.$updateProgress();
            video$this.scope$playing[0]();
            video$this.scope$playing[1]();
        });

    }

    this.setcTime=function(t)
    {
        this.player.currentTime(t);
    }

    this.playBetween = function(annotation,starttime)
    {
        this.pause();

        if(starttime == null)
        {
            this.setcTime(annotation.segTime_start);
        }
        else if(starttime == "current")
        {
        }
        else
        {
            this.setcTime(starttime);
        }

        this.player.play();

        var $vid = this;
        var $annotation = annotation;

        this.scope$playing[1]=function(){

            if($vid.player.currentTime() >= $annotation.segTime_end){
                $vid.player.pause();
                $vid.player.currentTime($annotation.segTime_end);
                $vid.scope$playing[1]=function(){};
            }

            if($elt.player.currentTime() < $annotation.segTime_start){
                $vid.scope$playing[1]=function(){};
            }
        };
    }

    this.pause = function()
    {
        this.player.pause();
    }

    this.play = function()
    {
        this.player.play();
    }

    this.$ = function(f)
    {
        var video$this = this;
        this.player.ready(function()
        {
            video$this.player.on("firstplay",function()
            {
                video$this._playing();
                f();
            });
        });
    }

    this.$pause = function(f)
    {
        this.player.off("pause");
        this.player.on("pause",function(){f();})
    }

};
