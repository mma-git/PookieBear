
// const images = ["../images/olololooo-fish-mouth.gif","../images/desk.gif","../images/hug-couple.gif","../images/smoochies.gif"];

const CONFIG = {
    
    //Title for browser
    pageTitle: "Pookie?",
    //random
    sike:[
        'AHAHHHAHA SIKE BYEEE',
        'big green button hello?',
        'nuh uh'
    ],
    images: [
        'images/desk.gif',
        'images/hug-couple.gif',
        'images/smoochies.gif',
        'images/dance.gif'],
    //end pics
    mwahimages:[
        'images/2.gif',
        'images/1.gif',
        'images/bear-hug.gif'],
    //Floating Emojis
    floatingEmojis:{
        hearts: ['❤️', '💖', '💕', '💗', '💓','💞'],  // Heart emojis
        bears: ['🧸', '🐻','🙊','🥰',],                       // Cute bear emojis
        // imgs:[
        //     '/images/dance.gif'
        // ]
    },

    //Prompts and answers

    questions:{
        first:{
            // image: "/images/be-my-love.gif",
            text:"Wanna be my pookiebear?",
            yesbtn:"duh of course",
            nobtn:"no cus i'm stupid"
        },
        second:{
            text:"IQ looking a lil low.",
            yesbtn:"MWAH ",
            nobtn:"best friends?"

        },
        third:{
            text:"ONE MORE CHANCE",
            yesbtn:"THIS ONE",
            nobtn:"don't you dare "
        },
        fourth:{
            text:"Women's Suffrage? Whats that",
            yesbtn:"YES YES YES I WANNA BE YOUR POOKIEBEAR",
            nobtn:""
        }
    },

    celebration: {
        title: "Happy Valentine's Day! ",
        message: "Pookiebears 4 lyfe!",
        emojis: "🎉💝I Love You💝💓"  // These will bounce around
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    }


};

window.VALENTINE_CONFIG = CONFIG; 





