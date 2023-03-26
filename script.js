// <p id="demo"></p>

// <script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// </script>

/*
			Splash Animation
		*/
        setTimeout(function () {
            document.querySelector(".splash-wrapper").classList.add("uncover");
        }, 1500);
        
        /*
                    Countdown
                */
        // Set the date we're counting down to
        var countdownDate = new Date(
            "April 31, 2023 00:00:00"
        ).getTime(); /* hrs: min: sec */
        //var countdownDate = new Date("October 8, 2022 00:00:00").getTime();/* hrs: min: sec */
        
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
        
            // Find the distance between now and the count down date
            var distance = countdownDate - now;
        
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            // Display the result in the element
            document.querySelector("#d").innerText = addZero(days);
            document.querySelector("#h").innerText = addZero(hours);
            document.querySelector("#m").innerText = addZero(minutes);
            document.querySelector("#s").innerText = addZero(seconds);
        
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown-box").innerHTML =
                    "<span class='cdi'>Merry Christmas!!</span>";
                document.querySelector(".title").innerText = "";
            }
        }, 1000);
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        
        /*
                    Snow
                */
        const canvas = document.querySelector("#fg");
        const ctx = canvas.getContext("2d");
        
        let width, height, lastNow;
        let snowflakes;
        const maxSnowflakes = 100;
        
        function init() {
            snowflakes = [];
            resize();
            render((lastNow = performance.now()));
        }
        
        function render(now) {
            requestAnimationFrame(render);
        
            const elapsed = now - lastNow;
            lastNow = now;
        
            ctx.clearRect(0, 0, width, height);
            if (snowflakes.length < maxSnowflakes) snowflakes.push(new Snowflake());
        
            ctx.fillStyle = ctx.strokeStyle = "#fff";
        
            snowflakes.forEach((snowflake) => snowflake.update(elapsed, now));
        }
        
        function pause() {
            cancelAnimationFrame(render);
        }
        function resume() {
            lastNow = performance.now();
            requestAnimationFrame(render);
        }
        
        class Snowflake {
            constructor() {
                this.spawn();
            }
        
            spawn(anyY = false) {
                this.x = rand(0, width);
                this.y = anyY === true ? rand(-50, height + 50) : rand(-50, -10);
                this.xVel = rand(-0.05, 0.05);
                this.yVel = rand(0.02, 0.1);
                this.angle = rand(0, Math.PI * 2);
                this.angleVel = rand(-0.001, 0.001);
                this.size = rand(7, 12);
                this.sizeOsc = rand(0.01, 0.5);
            }
        
            update(elapsed, now) {
                const xForce = rand(-0.001, 0.001);
        
                if (Math.abs(this.xVel + xForce) < 0.075) {
                    this.xVel += xForce;
                }
        
                this.x += this.xVel * elapsed;
                this.y += this.yVel * elapsed;
                this.angle += this.xVel * 0.05 * elapsed; //this.angleVel * elapsed
        
                if (
                    this.y - this.size > height ||
                    this.x + this.size < 0 ||
                    this.x - this.size > width
                ) {
                    this.spawn();
                }
        
                this.render();
            }
        
            render() {
                ctx.save();
                const { x, y, angle, size } = this;
                ctx.beginPath();
                ctx.arc(x, y, size * 0.2, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.restore();
            }
        }
        
        // Utils
        const rand = (min, max) => min + Math.random() * (max - min);
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        window.addEventListener("resize", resize);
        window.addEventListener("blur", pause);
        window.addEventListener("focus", resume);
        init();
        
        (function () {
            "use strict";
            window.addEventListener("load", function () {
                var canvas = document.getElementById("bg");
        
                if (!canvas || !canvas.getContext) {
                    return false;
                }
        
                /********************
                          Random Number
                        ********************/
        
                function rand(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
        
                /********************
                          Var
                        ********************/
        
                // canvas
                var ctx = canvas.getContext("2d");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                var X = canvas.width;
                var Y = canvas.height;
        
                /********************
                          Animation
                        ********************/
        
                window.requestAnimationFrame =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (cb) {
                        setTimeout(cb, 17);
                    };
        
                /********************
                          Ground
                        ********************/
        
                function drawGround() {
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(255, 255, 255)";
                    ctx.rect(0, Y - Y * 0.1, X, Y - Y * -0.1);
                    ctx.fill();
                }
        
                /********************
                          Moon
                        ********************/
        
                var radius = 150;
                //var newX = (X*1.5);
                var xOperond = rand(0, 1);
                var yOperond = rand(0, 1);
                var newX = X * rand(1, 2);
                var newY = Y / rand(1, 3.5);
        
                if (X < 768) {
                    radius = 100;
                }
        
                function drawMoon() {
                    ctx.save();
                    ctx.beginPath();
                    var col = "255, 255, 255";
                    var g = ctx.createRadialGradient(
                        newX / 2,
                        newY / 3,
                        radius,
                        newX / 3,
                        newY / 3,
                        0
                    );
                    g.addColorStop(0, "rgba(" + col + ", " + 1 * 1 + ")");
                    g.addColorStop(0.5, "rgba(" + col + ", " + 1 * 0.2 + ")");
                    g.addColorStop(1, "rgba(" + col + ", " + 1 * 0 + ")");
                    ctx.fillStyle = g;
                    ctx.arc(newX / 2, newY / 3, radius, Math.PI * 2, false);
                    ctx.fill();
                    ctx.restore();
                }
        
                /********************
                          Snow
                        ********************/
        
                // var
                /*var snowNum = 80;
                        var backSnowNum = 80;
                        var snows = [];
                        var backSnows = [];
        
                        if (X < 768) {
                          snowNum = 25;
                          backSnowNum = 25;
                        }
                         
                        function Snow(ctx, x, y, r, g) {
                          this.ctx = ctx;
                          this.init(x, y, r, g);
                        }
        
                        Snow.prototype.init = function(x, y, r, g) {
                          this.x = x;
                          this.y = y;
                          this.r = r;
                          this.c = '255, 255, 255';
                          this.v = {
                            x: 0,
                            y: g
                          };
                        };
        
                        Snow.prototype.updatePosition = function() {
                          this.y += this.v.y;
                        };
                        
                        Snow.prototype.wrapPosition = function() {
                          if (this.x - this.r > X) {
                            this.x = 0;
                          }
                          if (this.x + this.r < 0) {
                            this.x = X;
                          }
                          if (this.y - this.r > Y) {
                            this.y = 0;
                          }
                          if (this.y + this.r < 0) {
                            this.y = Y;
                          }
                        };
        
                        Snow.prototype.draw = function() {
                          ctx = this.ctx;
                          ctx.save();
                          ctx.beginPath();
                          ctx.fillStyle = this.gradient();
                          ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
                          ctx.fill();
                          ctx.closePath();
                          ctx.restore();
                        };
        
                        Snow.prototype.gradient = function () {
                          var col = this.c;
                          var g = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
                          g.addColorStop(0, "rgba(" + col + ", " + (1 * 1) + ")");
                          g.addColorStop(0.5, "rgba(" + col + ", " + (1 * 0.2) + ")");
                          g.addColorStop(1, "rgba(" + col + ", " + (1 * 0) + ")");
                          return g;
                        };
        
                        Snow.prototype.resize = function() {
                          this.x = rand(0, X);
                          this.y = rand(0, Y);
                        };
        
                        Snow.prototype.render = function() {
                          this.updatePosition();
                          this.wrapPosition();
                          this.draw();
                        };
        
                        for (var i = 0; i < backSnowNum; i++) {
                          var snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(1, 5), Math.random());
                          backSnows.push(snow);
                        }
                        
                        for (var i = 0; i < snowNum; i++) {
                          var snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(10, 15), Math.random() + 0.3);
                          snows.push(snow);
                        }*/
        
                /********************
                          Tree
                        ********************/
        
                // var
                var treeNum = 16;
                var trees = [];
                var backTreeNum = 16;
                var backTrees = [];
                var branchRad = (30 * Math.PI) / 180;
        
                if (X < 768) {
                    treeNum = 15;
                    backTreeNum = 8;
                }
        
                function Tree(ctx, x, y, t, w, c) {
                    this.ctx = ctx;
                    this.init(x, y, t, w, c);
                }
        
                Tree.prototype.init = function (x, y, t, w, c) {
                    this.ctx = ctx;
                    this.x = x;
                    this.y = y;
                    this.t = t;
                    this.w = w;
                    this.c = c;
                    this.splitNum = rand(10, 30);
                    this.tSplit = this.t / this.splitNum;
                    this.bSplit = this.w / this.splitNum;
                };
        
                Tree.prototype.draw = function () {
                    ctx = this.ctx;
                    ctx.lineCap = "round";
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = this.c;
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x, this.y - this.t);
                    ctx.stroke();
                    ctx.lineWidth = 1;
                    for (var i = 1, j = this.splitNum; i < this.splitNum; i++, j--) {
                        var bX1 = this.x + this.bSplit * j;
                        var bX2 = this.x - this.bSplit * j;
                        var bY = this.y - Math.tan(branchRad) * this.bSplit * j - this.tSplit * i;
                        ctx.moveTo(this.x, this.y - this.tSplit * i);
                        ctx.lineTo(bX1, bY);
                        ctx.stroke();
                        ctx.moveTo(this.x, this.y - this.tSplit * i);
                        ctx.lineTo(bX2, bY);
                        ctx.stroke();
                    }
                };
        
                Tree.prototype.resize = function () {
                    this.x = rand(0, X);
                    this.y = Y - Y * 0.1;
                };
        
                Tree.prototype.render = function () {
                    this.draw();
                };
        
                for (var i = 0; i < backTreeNum; i++) {
                    //var tree = new Tree(ctx, rand(0, X), Y - Y * 0.1, rand(200, 400), rand(50, 100), 'rgb(126, 158, 209)');
                    var tree = new Tree(
                        ctx,
                        rand(0, X),
                        Y - Y * 0.1,
                        rand(200, 400),
                        rand(50, 100),
                        "rgb(255, 255, 255)"
                    );
                    backTrees.push(tree);
                }
        
                for (var i = 0; i < treeNum; i++) {
                    if (isMobile()) {
                        treeNum = 5;
                    }
                    var tree = new Tree(
                        ctx,
                        rand(0, X),
                        Y - Y * 0.03,
                        rand(100, 300),
                        rand(20, 100),
                        "#0c385e"
                    ); //rgb(126, 158, 209)//#092b47
                    trees.push(tree);
                    //var tree = new Tree(ctx, rand(0, X), Y - Y * 0.1, rand(100, 300), rand(20, 100), 'rgb(255, 255, 255)');
                }
        
                /********************
                          Render
                        ********************/
        
                function render() {
                    ctx.clearRect(0, 0, X, Y);
                    drawMoon();
                    drawGround();
                    /*for (var i = 0; i < backSnows.length; i++) {
                            backSnows[i].render();
                          }*/
                    for (var i = 0; i < backTrees.length; i++) {
                        backTrees[i].render();
                    }
                    for (var i = 0; i < trees.length; i++) {
                        trees[i].render();
                    }
                    /*for (var i = 0; i < snows.length; i++) {
                            snows[i].render();
                          }*/
                    requestAnimationFrame(render);
                }
        
                render();
        
                /********************
                          Event
                        ********************/
        
                // resize
                function onResize() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    X = canvas.width;
                    Y = canvas.height;
                    drawMoon();
                    drawGround();
                    /*for (var i = 0; i < backSnows.length; i++) {
                            backSnows[i].resize();
                          }*/
                    for (var i = 0; i < backTrees.length; i++) {
                        backTrees[i].resize();
                    }
                    for (var i = 0; i < trees.length; i++) {
                        trees[i].resize();
                    }
                    /*for (var i = 0; i < snows.length; i++) {
                            snows[i].resize();
                          }*/
                }
        
                //Helper
                function isMobile() {
                    if (window.innerWidth < 775) {
                        return true;
                    } else {
                        return false;
                    }
                }
        
                window.addEventListener("resize", function () {
                    onResize();
                });
            });
        })();
        
        /*
                    Audio
                */
        var audioFiles = [
            "christmas-party.mp3",
            "christmas-rock.mp3",
            "happy-new-year.mp3",
            "jingle-bells.mp3",
            "snowflake.mp3",
            "upbeat-countdown.mp3"
        ];
        var audio;
        var playlist;
        var tracks;
        var current;
        
        generateShuffle();
        
        function generateShuffle() {
            var shuff = shuffle(audioFiles);
            initAudio();
        
            /*document.querySelector('#music-list ul').innerHTML="";
        
                    for(var i = 0; i < shuff.length; i++) {
                      var li = document.createElement('li');
                      li.innerHTML = shuff[i].toString().replace('-', ' ').replace('.mp3', '');
                      document.querySelector('#music-list ul').appendChild(li);
                    }
        
                    document.querySelectorAll('#music-list ul li')[current].classList.add('active');*/
        }
        
        function initAudio() {
            current = 0;
            audio = document.getElementById("audio");
            //audio[0].volume = .40;
            var len = audioFiles.length;
        
            run(audioFiles[current], audio);
        
            audio.addEventListener("ended", function (e) {
                current++;
                if (current == len) {
                    current = 0;
                }
                run(audioFiles[current], audio);
                //added
                if (current !== 0) {
                    //document.querySelectorAll('#music-list ul li')[current-1].classList.remove('active');
                } else {
                    //document.querySelectorAll('#music-list ul li')[audioFiles.length-1].classList.remove('active');
                }
                //document.querySelectorAll('#music-list ul li')[current].classList.add('active');
            });
        }
        
        function run(link, player) {
            player.src =
                "https://raw.githubusercontent.com/ZaneWesley/image-dropbox/main/christmas-audio/" +
                link;
            audio.load();
            audio.play();
        }
        
        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex;
        
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
        
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
        
            return array;
        }
        
        document.getElementById("play-toggle").addEventListener("click", function (e) {
            if (this.innerHTML == '<i class="fa-solid fa-volume-slash"></i>') {
                audio.play();
                this.innerHTML = '<i class="fa-solid fa-volume"></i>';
            } else {
                audio.pause();
                this.innerHTML = '<i class="fa-solid fa-volume-slash"></i>';
            }
        });
        