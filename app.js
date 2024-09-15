// defining a dom shortcut function.
function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

// This block for Type writer effect on headline section
const heading = ' I am Varshith Chowdary, <br/>';
const hArr = heading.split(' ');
let typeCount = 1;
function typeWriter() {
  if (typeCount < hArr.length) {
    document.querySelector(
      '.type-animation',
    ).innerHTML += ` ${hArr[typeCount]}`;
    typeCount += 1;
    setTimeout(typeWriter, 200);
  }
}

typeWriter();

// this peace of code is responsible for scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_item_action');
window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelectorAll(`a[href*=${id}]`)
          .forEach((item) => item.classList.add('active'));
      });
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navigation Menu
const mobileMenu = document.querySelector('.header_menu');
const navItems = document.querySelector('.mobile_nav_items');
const selectNavItems = document.querySelectorAll('#m_nav');
const crossIcon = document.querySelector('.toggle-cross');
let setMobileNav = false;

function toggleNav() {
  if (setMobileNav) {
    navItems.classList.remove('df');
    setMobileNav = false;
  } else {
    navItems.classList.add('df');
    setMobileNav = true;
  }
}

mobileMenu.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
selectNavItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});

// Project Section
// project data
const projectData = [
  {
    id: 'project9',
    title: 'Hungry Hub',
    frame: ['E-commerce', 'Frontend', 2023],
    primaryText:
      'Hungry Hub is a React-based platform for online food ordering and delivery. Browse restaurant menus, add items to your cart, and securely place orders for home delivery.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl:
      'https://user-images.githubusercontent.com/35267447/223940500-3aea07b1-4bc6-4705-ae49-e64f96544b44.PNG',
    projectDetails:
      'Hungry Hub is an online platform built using React, Redux, and Firebase, which allows users to browse and cart food items from a variety of restaurants and place orders for home delivery. Users can sign up, browse the menus of different restaurants, add food items to their cart, and proceed to checkout. The platform integrates with Firebase to provide secure payment options and order tracking for users. With Hungry Hub, users can enjoy the convenience of online food ordering and get their favorite meals delivered straight to their doorstep.',
    liveLink: 'https://hungry-hub.onrender.com/',
    sourceLink: 'https://github.com/raihan2bd/hungry-hub',
  },

  {
    id: 'project6',
    title: 'Weather APP',
    frame: ['Microverse', 'Frontend', 2023],
    primaryText:
      'Weather-Forecast is a Microverce React capstone project. Using this project users can see a list of countries in a particular region with country details and also see the weather of that country.',
    tags: ['HTML', 'CSS', 'Javascript','Redux'],
    imageUrl:
      'https://user-images.githubusercontent.com/35267447/217789912-ead664b3-086f-4de2-8df8-e0229f60ae8a.PNG',
    projectDetails:
      'Weather-Forecast is a Microverse React capstone project that allows users to view a list of countries in a selected region along with country details. Additionally, users can also view the weather information for a selected country, providing a comprehensive picture of weather patterns and travel information for their destination of interest.',
    liveLink: 'https://weather-forecast-0xbe.onrender.com/',
    sourceLink: 'https://github.com/raihan2bd/weather-forecast',
  },
  
  {
    id: 'project1',
    title: 'Todolist',
    frame: ['Microverse', 'Frontend', 2022],
    //aa
    primaryText:
      'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/todo-list-js.png',
    projectDetails:
      'This is A simple but effective and responsive (mobile first) Microverse exercise project. To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    liveLink: 'https://raihan2bd.github.io/Todo-List/',
    sourceLink: 'https://github.com/raihan2bd/Todo-List',
  },

]; // End of portfolio data

// Fetch single project from projectData
function fetchOnePoject(id) {
  const projects = projectData;

  let project;
  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const article = dcl('article');
    article.classList.add('popup_article');
    article.setAttribute('id', project.id);

    const articleModal = dcl();
    articleModal.classList.add('article-modal');
    // Article title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;

    // cross-icon
    const crossIcon = dcl('span');
    crossIcon.setAttribute('id', 'article-close');
    crossIcon.innerHTML = '<img src="./images/cross-icon.png" alt="X"/>';

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });

    // image
    const articleImage = dcl();
    articleImage.classList.add('article-image');
    articleImage.innerHTML = `<img class='article-img' src='${project.imageUrl}' alt='${project.title}'/>`;

    // project block
    const projectBlock = dcl();
    projectBlock.classList.add('article-block');

    // left block
    const leftBlock = dcl();
    leftBlock.classList.add('left-block');
    // article_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.projectDetails;
    leftBlock.append(workDetailsContent);

    // right block
    const rightBlock = dcl();
    rightBlock.classList.add('right-block');

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });

    // actions
    const actions = dcl();
    actions.classList.add('actions');

    // live link
    if (project.liveLink) {
      const liveLink = dcl('a');
      liveLink.classList.add('article-btn');
      liveLink.setAttribute('href', project.liveLink);
      liveLink.setAttribute('target', '_blank');
      liveLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-live.png" alt= "Live"/></span>';
      actions.appendChild(liveLink);
    }

    // source link
    const sourceLink = dcl('a');
    sourceLink.classList.add('article-btn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.setAttribute('target', '_blank');
    sourceLink.innerHTML = 'See Source <span class="btn-icon"><img src="./images/btn-github.png" alt= "Live"/></span>';


    actions.appendChild(sourceLink);


    rightBlock.append(workCat, actions);



    articleModal.append(
      crossIcon,
      workTitle,
      workInfo,
      articleImage,
      projectBlock,
    );

    article.append(articleModal);
    document.querySelector('main').append(article);

    const closeModal = document.getElementById('article-close');
    closeModal.addEventListener('click', () => {
      document.querySelector('main').removeChild(article);
    });
  }
}

function fetchAllProject() {
  const portfolio = document.getElementById('projects');
  projectData.forEach((project) => {
    const card = dcl();
    card.classList.add('work_card');

    const workPreview = dcl();
    workPreview.classList.add('work_preview');
    workPreview.innerHTML = `<img class='project-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(workPreview);

    const workDetails = dcl();
    workDetails.classList.add('work_details');

    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;
    workDetails.appendChild(workTitle);

    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    workDetails.appendChild(workInfo);

    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.primaryText;
    workDetails.appendChild(workDetailsContent);

    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    workDetails.appendChild(workCat);
    const atnBrn = dcl('button');
    atnBrn.classList.add('atn_btn');
    atnBrn.innerText = 'See More';
    atnBrn.setAttribute('id', project.id);
    atnBrn.addEventListener('click', () => {
      fetchOnePoject(project.id);
    });
    workDetails.appendChild(atnBrn);

    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function loadLocalStorage() {
  const formData = JSON.parse(window.localStorage.getItem('formData'));
  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function onChange(e) {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = {};
  }
  const m = e.target.name;
  formData[m] = e.target.value;
  formData = JSON.stringify(formData);
  window.localStorage.setItem('formData', formData);
}

nameInput.addEventListener('change', onChange);
emailInput.addEventListener('change', onChange);
messageInput.addEventListener('change', onChange);

window.onload = () => {
  fetchAllProject();
  loadLocalStorage();
};

// Form Validation
function onSubmit(e) {
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  const email = inputEmail.value;

  if (email !== email.toLowerCase()) {
    e.preventDefault();
    inputEmail.classList.add('invalid');
    formInfo.classList.add('error');
    formInfo.innerText = 'Error form is not sent! The Email should be in lower case!!';
  } else {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
  }
}
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', onSubmit);


const inputEmail = document.getElementById('email');
const formInfo = document.getElementById('form-info');
inputEmail.addEventListener('change', () => {
  inputEmail.classList.remove('invalid');
  formInfo.classList.remove('error');
  formInfo.innerText = '';
});
