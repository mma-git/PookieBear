const config = window.VALENTINE_CONFIG;
function validateConfig() {
    const warnings = [];

    // Check required fields
    // if (!config.valentineName) {
    //     warnings.push("Valentine's name is not set! Using default.");
    //     config.valentineName = "My Love";
    // }

    // Validate colors
    // const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    // Object.entries(config.colors).forEach(([key, value]) => {
    //     if (!isValidHex(value)) {
    //         warnings.push(`Invalid color for ${key}! Using default.`);
    //         config.colors[key] = getDefaultColor(key);
    //     }
    // });

    // // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}
//browser title
document.title = config.pageTitle;
//initialize page content when DOM loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    // document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yes1').textContent = config.questions.first.yesbtn;
    document.getElementById('no1').textContent = config.questions.first.nobtn;
    // document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('yes2').textContent = config.questions.second.yesbtn;
    document.getElementById('no2').textContent = config.questions.second.nobtn;
    
    // // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yes3').textContent = config.questions.third.yesbtn;
    document.getElementById('no3').textContent = config.questions.third.nobtn;

    // // Set final question texts
    document.getElementById('question4Text').textContent = config.questions.fourth.text;
    document.getElementById('yes4').textContent = config.questions.fourth.yesbtn;
    document.getElementById('no4').textContent = config.questions.fourth.nobtn;

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    // setupMusicPlayer();
});

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Create heart explosion effect
    createHeartExplosion();
}
// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}
function showRandomImage() {
    // const images = CONFIG.images;
    const images= ["/images/olololooo-fish-mouth.gif","/images/desk.gif","/images/hug-couple.gif","/images/smoochies.gif","/images/dance.gif"];

    if (!Array.isArray(images) || images.length === 0) {
      console.error("images must be a non-empty array in the config file.");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
  
      // Check if an overlay already exists. If so, update the image.
      let overlay = document.querySelector('.overlay-container');
      let img;
      if (overlay) {
          img = overlay.querySelector('img');
          if (img) {
              img.src = randomImageUrl;
          } else {
              console.error("Image element not found in overlay.");
              return;
          }
      } else {
          // Create elements only if the overlay doesn't exist.
          img = document.createElement('img');
          img.src = randomImageUrl;
          img.alt = "Random Image";
          img.style.maxWidth = "100%";
          img.style.maxHeight = "100%";
          img.style.width="128px";
          img.style.height="128px";
          img.style.objectFit="contain";
          img.style.display = 'block';
          img.style.margin = '0 auto';
          img.id="randomimg";
          overlay = document.createElement('div');
          overlay.classList.add('overlay-container'); // Add a class for easy selection
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          overlay.style.display = 'flex';
          overlay.style.justifyContent = 'center';
          overlay.style.alignItems = 'center';
  
          overlay.appendChild(img);
          document.body.appendChild(overlay);
  
          overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
          });
      }
  
  
  }
  
  
  // Add event listener to the button:
  document.addEventListener('DOMContentLoaded', () => { // Wait for DOM to load
    const button = document.getElementById('toros-pic'); // Replace 'myButton' with your button's ID
  
    if (button) {
      button.addEventListener('click', showRandomImage);
    } else {
      console.error("Button with ID 'myButton' not found.");
    }
  });

  function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    var no4 = document.getElementById("no4");
    no4.textContent="AHAHHHAHA SIKE BYEEE"

}