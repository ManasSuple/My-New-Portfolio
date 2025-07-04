//Projects section
// This section contains a list of projects with their details, images, and tags.
export const myProjects = [
  
  {
    id: 1,
    title: "Accenture",
    description:
      "Data Analytics and Visualization Job Simulation (Forage)",
    subDescription: [
      "Simulated the role of a Data Analyst advising a social media client on content strategy.",
      "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions.",
      "Delivered a professional deck and video presentation to communicate key insights for the client and internal stakeholders.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accenture.png",
    tags: [
      {
        id: 1,
        name: "PPT",
        path: "/assets/logos/microsoft-powerpoint.svg",
      },
      {
        id: 2,
        name: "Tableau",
        path: "/assets/logos/tableau-software.svg",
      },
      {
        id: 3,
        name: "Excel",
        path: "/assets/logos/microsoft-excel.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Deloitte",
    description:
      "Data Analytics Job Simulation (Forage)",
    subDescription: [
      "Completed a Deloitte job simulation focused on forensic technology and business data analytics.",
      "Built interactive dashboards using Tableau to visualize client data effectively.",
      "Designed responsive UI components with Tailwind CSS for an eApplied Excel-based classification and logic functions to detect anomalies and drive actionable conclusions.nhanced UX."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/deloitte.png",
    tags: [
      {
        id: 1,
        name: "Tableau",
        path: "/assets/logos/tableau-software.svg",
      },
      {
        id: 2,
        name: "Excel",
        path: "/assets/logos/microsoft-excel.svg",
      },
    ],
  },
  {
    id: 3,
    title: "RAG PDF Reader",
    description:
      "This project allows you to chat with your PDF documents using Retrieval-Augmented Generation (RAG), powered by Google Gemini API, Langchain, and Streamlit.",
    subDescription: [
      "Parse and chunk the document",
      "Embed the chunks using Google's Generative AI embeddings",
      "Store and retrieve embeddings using ChromaDB",
      "Generate answers to your questions about the document",
    ],
    href: "https://github.com/ManasSuple/RAG-PDFReader",
    logo: "",
    image: "/assets/projects/rag-pdf-reader.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
      {
        id: 3,
        name: "Gemini Ai",
        path: "/assets/logos/gemini-ai.svg",
      },
      {
        id: 4,
        name: "Google-Colab",
        path: "/assets/logos/google-colab.svg",
      },
    ],
  },
  {
    id: 4,
    title: "AI-Powered Travel Assistant",
    description:
      "This project is an intelligent Travel Planning Agent built using LangChain, Gemini API, and real-time data tools.",
    subDescription: [
      "Real-time weather via WeatherAPI",
      "Top 5 attractions from Tavily Search",
      "Daily cost breakdown (budget to luxury)",
      "Simulated flight suggestions from Mumbai",
      "Full travel report with formatting",
      "Simple CLI app – just run and input your destination"
    ],
    href: "https://github.com/ManasSuple/Travel-Ai-Agent",
    logo: "",
    image: "/assets/projects/travel-ai-agent.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
      {
        id: 3,
        name: "Gemini Ai",
        path: "/assets/logos/gemini-ai.svg",
      },
      {
        id: 4,
        name: "Google-Colab",
        path: "/assets/logos/google-colab.svg",
      },
    ],
  },
  {
    id: 5,
    title: "LinkedIn Post Generator",
    description:
      "This project builds a Streamlit web app that generates professional and engaging LinkedIn posts using Google Gemini, LangChain, and Streamlit.",
    subDescription: [
      "Powered by Gemini 2.0 (via LangChain)",
      "Takes natural language topics as input",
      "Generates professional LinkedIn-style posts",
      "Adds hashtags and maintains tone consistency",
      "Built with Streamlit for easy interaction",              
    ],
    href: "https://github.com/ManasSuple/LinkedIn-PostGenerator",
    logo: "",
    image: "/assets/projects/linkedin-post-generator.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
      {
        id: 3,
        name: "Gemini Ai",
        path: "/assets/logos/gemini-ai.svg",
      },
      {
        id: 4,
        name: "Google-Colab",
        path: "/assets/logos/google-colab.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Grocery Genius",
    description:
      "Built a basic grocery prototype app using FlutterFlow for grocery shopping based on preferences.",
    subDescription: [
      ""
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "FlutterFlow",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "VScode",
        path: "/assets/logos/visualstudiocode.svg",
      },
    ],
  },
];

//Footer section
export const mySocials = [
  {
    name: "WhatsApp",
    href: "+91 89281 29281",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/manas-suple/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ManasSuple",
    icon: "/assets/socials/github.svg",
  },
];


//My work experiences section
export const experiences = [
  {
    title: "Intern",
    job: "Mira-Bhayandar Municipal Corporation",
    date: "Jun 2023 Jul 2023",
    contents: [
      "Delved into solid waste management, tracing the journey from household bins to final disposal.",
      "Managed social media and email accounts as part of a group assignment.",
      "Crafted engaging content, edited photos and videos for Instagram reels using Canva and Adobe Premiere Pro.",
      "Honed skills in workflow and communication within public sector departments.",
    ],
  },
  
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];