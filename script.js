const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  // const barBox = document.querySelector('.bar-box');  //-----------------------------default bars

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 100);//-----------------------------defalut period 1100

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // barBox.classList.remove('active');
  // setTimeout(() => {
  //   barBox.classList.add('active');
  // }, 1100); //-----------------------------default bars

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');

}


navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 100); //-----------------------------defalut period 1100
    }
  });
});

logoLinks.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 100); //-----------------------------defalut period 1100
  }
});


const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');
  });
});

const arrowRight = document.querySelector('.project-container .arrow-right');
const arrowLeft = document.querySelector('.project-container .arrow-left');
let index = 0;
const activeProject = () => {
  const imgSlide = document.querySelector(`.project-box .img-slide`);
  const projectDetais = document.querySelectorAll('.project-detail');

  imgSlide.style.transform = `translateX(calc(-${index * 100}% - ${index * 2}rem))`;

  projectDetais.forEach(detail => {
    detail.classList.remove('active');
  });
  projectDetais[index].classList.add('active');
}
arrowRight.addEventListener('click', () => {
  if (index < 3) {
    index++;
    arrowLeft.classList.remove('disabled');
  }
  else {
    index = 4;
    arrowRight.classList.add('disabled');
  }
  activeProject();
});
arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  }
  else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activeProject();
});

//text transform
class TextScrambler {
  constructor(el, chars = 'vanneihthawng') {
    this.el = el;
    this.chars = chars;
  }

  scramble(from, to, duration = 800) {
    const start = performance.now();
    const maxLen = Math.max(from.length, to.length);

    const randomChar = () => this.chars[Math.floor(Math.random() * this.chars.length)];

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      let output = '';

      for (let i = 0; i < maxLen; i++) {
        if (i < progress * maxLen) {
          // once past this character’s turn, show the target
          output += to[i] || '';
        } else if (Math.random() < 0.28) {
          // sometimes show a random char
          output += randomChar();
        } else {
          // otherwise show the original
          output += from[i] || '';
        }
      }

      this.el.textContent = output;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // ensure exact final state
        this.el.textContent = to;
      }
    };

    requestAnimationFrame(update);
  }
}

document.querySelectorAll('.scramble').forEach(el => {
  const original = el.getAttribute('data-original');
  const translation = el.getAttribute('data-translation');

  // sanity check
  if (!original || !translation) {
    console.warn('Missing data-original or data-translation on', el);
    return;
  }

  const scr = new TextScrambler(el);

  el.addEventListener('mouseenter', () => {
    scr.scramble(el.textContent, translation, 1000);
  });

  el.addEventListener('mouseleave', () => {
    scr.scramble(el.textContent, original, 1000);
  });
});

// Dark mOde
 const toggle = document.getElementById('darkModeToggle');

  // Load saved theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggle.checked = true;
  }

  // Toggle theme on click
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
