let myInterval;

function reset1() {
    clearInterval(myInterval); // Reset the movement
    document.getElementById('i1').style.left = "500px";
    document.getElementById('i1').style.top = "100px";
    document.getElementById("msg").innerHTML = "";
}

function disp() {
    clearInterval(myInterval); // Clear any existing interval to avoid multiple intervals running simultaneously

    myInterval = setInterval(function() {
        let step = 1; // Change this step value to control speed
        let img = document.getElementById('i1');
        let y = img.offsetTop;
        let x = img.offsetLeft;

        // Update the coordinates display
        document.getElementById("msg").innerHTML = "X: " + x + " Y : " + y;

        // Move downwards until it reaches y = 400px
        if (y < 400 && x === 500) {
            y += step;
            img.style.top = y + "px";
        }
        // Move right until it reaches x = 800px
        else if (x < 800 && y === 400) {
            x += step;
            img.style.left = x + "px";
        }
        // Move upwards until it reaches y = 100px
        else if (y > 100 && x === 800) {
            y -= step;
            img.style.top = y + "px";
        }
        // Move left until it reaches x = 500px
        else if (x > 500 && y === 100) {
            x -= step;
            img.style.left = x + "px";
        }
        // When it completes the square, stop the movement
        else {
            clearInterval(myInterval);
        }
    }, 20); // Adjust this value to control the speed of the movement
}