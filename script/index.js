const dropdown = document.getElementById("openSidebarMenu");
const menu = document.querySelector(".menuresponsive");
const cardWrapper = document.querySelector(".card-wrapper");

const slideWrapper = document.querySelector(".slide-wrapper");

let slideNumber = 0;

const cardData = [
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
    header: "iOS Development",
    description: "რეგისტრაცია დასრულებულია",
    url: "#ios",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
    header: "React",
    description: "რეგისტრაცია დასრულებულია",
    url: "#react",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
    header: "Intro to Python",
    description: "რეგისტრაცია დასრულებულია",
    url: "#basic-python",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
    header: "Advanced Python",
    description: "რეგისტრაცია დასრულებულია",
    url: "#advance-python",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
    header: "Advanced Cybersecurity Course",
    description: "რეგისტრაცია დასრულებულია",
    url: "#cyber-security",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
    header: "ToT - Training of Trainers",
    description: "რეგისტრაცია დასრულებულია",
    url: "#training-trainer",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
    header: "Blockchain",
    description: "რეგისტრაცია დასრულებულია",
    url: "#blockchain",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
    header: "DevOps",
    description: "რეგისტრაცია დასრულებულია",
    url: "#devops",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_450,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
    header: "Information Security Governance",
    description: "რეგისტრაცია დასრულებულია",
    url: "#information-secutiy",
  },
];

const faqs = [
  {
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    headerText: "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:",
    description: [
      {
        paragrapgh:
          "I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. ",
      },
      {
        paragrapgh:
          "II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე. ",
      },
      {
        paragrapgh:
          "III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.",
      },
      {
        paragrapgh:
          "IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
      },
    ],
  },

  {
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    headerText: null,
    description: [
      {
        paragrapgh:
          "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე. ",
      },
    ],
  },

  {
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    headerText: null,
    description: [
      {
        paragrapgh:
          "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ. ",
      },
    ],
  },
];

const imageData = [
  {
    imageUrl: [
      "https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_369,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png",
      "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_362,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png",
      "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_375,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png",
    ],
  },
  {
    imageUrl: [
      "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_372,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png",
      "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_281,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png",
      "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_468,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png",
    ],
  },
  {
    imageUrl: [
      "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_341,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png",
    ],
  },
];

dropdown.addEventListener("change", () => {
  menu.classList.toggle("d-none");
  menu.style.animation = "slide .300s linear";
});

window.addEventListener("scroll", () => {
  var menu = document.querySelector(".navbar");
  if (window.scrollY > 70) {
    // menu.classList.add("darkOpacity");
    menu.style.position = "fixed";
    menu.style.top = "0px";
    menu.style.backgroundColor = "#1a1e1fd4";
    menu.style.animation = "menustyle 1s ease-in-out";
  } else {
    menu.style.animation = "";
    // menu.classList.remove("darkOpacity");
    menu.style.backgroundColor = "";
  }
});

// generate markup for cards
function generateCardMarkup() {
  return cardData
    .map((data) => {
      return `<div class="card">
                <div class="image-wrapper">
                    <img src="${data.imageUrl}}" class="card-image" alt=" card banner">
                </div>
                <div class="card-content">
                    <div style="margin-top: 20px;"><h4>${data.header}</h4></div>
                    <div class="card-description">
                        <p>${data.description}</p>
                    </div>

                    <div class="card-button">
                        <a href="${data.url}" class="text-blue ">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg"
                            viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <path fill="#00AEEF"
                                    d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
                                    data-color="1"></path>
                            </g>
                        </svg>
                           
                            <span>კურსის დეტალები</span>
                        </a>
                    </div>
                </div>
            </div>`;
    })
    .join("");
}

function setCardData() {
  let markup = generateCardMarkup();
  cardWrapper.innerHTML = markup;
}

// toggle faq question
function handleChironClick(itemIndex) {
  const allIcons = document.querySelectorAll(".icon");
  const allDescription = document.querySelectorAll(".description");
  allIcons.forEach((icon, index) => {
    if (index !== itemIndex) {
      icon.classList.remove("rotate");
    } else {
      icon.classList.toggle("rotate");
    }
  });

  allDescription.forEach((description, index) => {
    if (index !== itemIndex) {
      description.classList.add("hidden");
    } else {
      description.classList.toggle("hidden");
    }
  });
}

function generateFAQMarkup() {
  return faqs
    .map((item, index) => {
      return `<div class="single-question" onclick="handleChironClick(${index})">
                <div class="header-faq">
                    <h2 class="questionText">${item.question}</h2>
            
                    <div class="icon">
                        <i class="fa fa-chevron-down"></i>
                    </div>
            
                </div>
                <div class="description hidden">
                ${
                  item.headerText
                    ? `  <div class="description-header">
                        <p>${item.headerText}</p>
                    </div>`
                    : ""
                }
                  
                    <div class="paragrapghWrapper">
                    ${item.description
                      .map((description) => {
                        return `<p class="paragrapgh">${description.paragrapgh}</p>
                        </p>`;
                      })
                      .join(" ")}
                    </div>
                </div>
            </div>`;
    })
    .join(" ");
}

function setFAQHTMLMarkup() {
  const questionWrapper = document.querySelector(".questions-wrapper");
  let markup = generateFAQMarkup();
  questionWrapper.innerHTML = markup;
}

setCardData();
setFAQHTMLMarkup();

function generateSlidermarkup() {
  let markup = imageData[slideNumber].imageUrl
    .map((item) => {
      return ` <div class="slide-image">
                    <img src="${item}"
                        alt="slider image">
                </div>`;
    })
    .join(" ");

  slideWrapper.innerHTML = markup;
}

function addSlideNumber() {
  if (slideNumber === 2) {
    slideNumber = 0;
    generateSlidermarkup();
  } else {
    slideNumber = slideNumber + 1;
    generateSlidermarkup();
  }
}

function handleLeftArrow() {
  if (slideNumber === 0) {
    slideNumber = 2;
    generateSlidermarkup();
  } else {
    slideNumber = slideNumber - 1;
    generateSlidermarkup();
  }
}

setInterval(() => {
  addSlideNumber();
}, 5000);
