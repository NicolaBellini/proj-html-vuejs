import { reactive } from "vue";

export const store = reactive({
  social: {
    abb: "porcocane",
  },
  contacts: {
    orari: "Mon-Sat-9.00-18.00",
    phone: "+1(305) 1234-5678",
    mail: "hello@example.com",
    location: "Main Avenue, 987",
    slogan: "Enjoy the low price. We are tracking any intention of privacy.",
    credits: "2020 NEXGEN is Proudly Powered by Codings.",
    social: {
      facebook: '<i class="fa-brands fa-facebook-f"></i>',
      twitter: '<i class="fa-brands fa-x-twitter"></i>',
      linkedin: '<i class="fa-brands fa-linkedin-in"></i>',
    },
  },
  navNames: ["HOME", "SERVICES", "SKILLS", "PARTNERS", "BLOG", "GET IN TOUCH"],
  cardList: [
    {
      img: "/img/news-1.jpg",
      titolo: "Increasing creativity is possible for everyone",
    },
    {
      img: "/img/news-2.jpg",
      titolo: "Because market research is part of the business plan",
    },
    {
      img: "/img/news-3.jpg",
      titolo: "Working from home is now a trend",
    },
  ],
  logoList: [],
});
