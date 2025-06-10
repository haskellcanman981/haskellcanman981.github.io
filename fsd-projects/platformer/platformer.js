$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(900, 630, 150, 30, "#52c91a")
    createPlatform(1100, 550, 150, 30, "#52c91a")
    createPlatform(750, 470, 150, 30, "#52c91a")
    createPlatform(500, 580, 15, 30, "#52c91a")
    createPlatform(360, 500, 10, 30, "#52c91a")
    createPlatform(100, 450, 100, 30, "#52c91a")
    createPlatform(100, 320, 70, 30, "#52c91a")
    createPlatform(100, 1, 3, 470, "#52c91a")
    createPlatform(300, 290, 10, 30, "#52c91a")
    createPlatform(500, 290, 10, 30, "#52c91a")
    createPlatform(700, 290, 10, 30, "#52c91a")
    createPlatform(600, 290, 10, 30, "#52c91a")
    createPlatform(400, 290, 10, 30, "#52c91a")
    createPlatform(800, 250, 100, 30, "#52c91a")
    createPlatform(1100, 300, 3, 30, "#52c91a")
    createPlatform(1300, 200, 100, 30, "#52c91a")
    createPlatform(1, 740, 2000, 30, "#52c91a")



    // TODO 3 - Create Collectables
    createCollectable("ring", 1350, 150, 0.5, 0.7)
    createCollectable("ring", 800, 400, 0.5, 0.7)
    createCollectable("ring", 150, 400, 0.5, 0.7)
    createCollectable("ring", 850, 200, 0.5, 0.7)



    
    // TODO 4 - Create Cannons
    createCannon("right", 690, 880)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
