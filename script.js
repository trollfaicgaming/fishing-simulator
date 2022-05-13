// written by chapel1337

/* 
  ______ _____  _____ _    _ _____ _   _  _____        _____ _____ __  __ _    _ _            _______ ____  _____  
 |  ____|_   _|/ ____| |  | |_   _| \ | |/ ____|      / ____|_   _|  \/  | |  | | |        /\|__   __/ __ \|  __ \ 
 | |__    | | | (___ | |__| | | | |  \| | |  __      | (___   | | | \  / | |  | | |       /  \  | | | |  | | |__) |
 |  __|   | |  \___ \|  __  | | | | . ` | | |_ |      \___ \  | | | |\/| | |  | | |      / /\ \ | | | |  | |  _  / 
 | |     _| |_ ____) | |  | |_| |_| |\  | |__| |      ____) |_| |_| |  | | |__| | |____ / ____ \| | | |__| | | \ \ 
 |_|    |_____|_____/|_|  |_|_____|_| \_|\_____|     |_____/|_____|_|  |_|\____/|______/_/    \_\_|  \____/|_|  \_\
                                                                                                               
*/                                                                                                             

// started on 5/13/2022

playerStats = new Object;
playerInventory = new Object;
fishList = new Object;

playerStats = {
    health: 100,
    level: 1,
    luck: 1,
    skill: 1,
}

playerInventory = {
    fishingRod: "fishing rod",
    bait: "10 bait",
}

// begin

function startGame() {
    let menu = prompt("welcome to fishing simualtor! what do you want to do?" + "\n" + "\n" + "1. fish" + "\n" + "2. check your inventory" + "\n" + "3. go to the shop");

    switch(menu) {
        // finished
        // can't find a more efficient way to use || in switch, sorry if this looks messy
        
        case "fish":
            goFish();
        break;
        case "Fish":
            goFish();
        break;

        case "inventory":
            checkInventory();
        break;
        case "Inventory":
            checkInventory();
        break;

        case "shop":
            alert("shop option test");
        break;
        case "Shop":
            alert("shop option test");
        break;

        default:
            alert("please choose one of the listed options");
            window.location.reload();
        break;
    }

    // functions

    function goFish() {
        // finished for now
        alert("traveling to lake chimpanzee...");
        let fishOptions = prompt("you have arrived at lake chimpanzee! what do you want to do?" + "\n" + "\n" + "1. fish" + "\n" + "2. go back");

        switch(fishOptions) {
            case "fish":
                fish();
            break;
            case "Fish":
                fish();
            break;

            case "go back":
                window.location.reload();
            break;
            case "Go back":
                window.location.reload();
            break;

            default:
                window.location.reload();
            break;
        }
    }

    function fish() {
        // unfinished
        // rng always give 0

        alert("fishing...");
        let fishRNG = Math.floor(Math.random() * 2)
        
        if (fishRNG == 1) {
            alert("you caught a fish!");
        } 
        else if (fishRNG == 0) {
            alert("didn't catch fish");
        }
    }

    function checkInventory() {
        // unfinished

        alert("checking inventory...")
        let inventory = prompt("you have the following items in your inventory:" + "\n" + "1. item" + "\n" + "2. item" + "\n" + "\n" + "go back");

        switch(inventory) {
            case "go back":
                window.location.reload();
            break;
            case "Go back":
                window.location.reload();
            break;

            default:
                alert("please choose one of the listed options");
                checkInventory();
            break;
        }
    }
};

// end