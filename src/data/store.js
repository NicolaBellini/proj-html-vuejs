import { reactive } from "vue";

export const store = reactive({
  counter: 0,
  mainTitle: "Vite state",
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
});
