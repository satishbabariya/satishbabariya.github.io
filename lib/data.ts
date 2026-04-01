export const siteConfig = {
  name: "Satish Babariya",
  email: "satish.babariya@gmail.com",
  url: "https://satishbabariya.com",
  description:
    "Software Engineer building systems across the full stack — from iOS apps and backend services to compiler engineering and cloud infrastructure. A decade of shipping code in Swift, Go, TypeScript, Rust, and C++. Currently at Tarka Labs working on cloud infrastructure.",
  keywords: [
    "satishbabariya", "satish", "babariya", "software engineer",
    "golang", "typescript", "swift", "ios", "rust", "c++",
    "compiler", "terraform", "aws", "supabase", "open source",
  ],
  social: {
    github: "https://github.com/satishbabariya",
    linkedin: "https://linkedin.com/in/satishbabariya",
    twitter: "https://twitter.com/ej_satyo",
    email: "mailto:satish.babariya@gmail.com",
  },
};

export const skills = {
  languages: ["Swift", "Go", "TypeScript", "Rust", "C++", "Java"],
  frameworks: [
    "Echo (Go)", "Express / Fastify", "React / React Native",
    "SwiftUI / UIKit", "gRPC / Connect-Go", "Spring Boot",
  ],
  tools: [
    "Terraform", "Docker", "AWS (Lambda, DynamoDB, SQS, CloudWatch)",
    "LLVM", "Git & GitHub Actions", "ELK Stack",
  ],
  design: [
    "Clean Architecture", "Compiler Design (Lexer/Parser/AST)",
    "Distributed Systems (Raft)", "SDK & API Design",
  ],
};

export const experience = [
  {
    company: "Tarka Labs",
    url: "https://github.com/tarkalabs",
    time: "Feb 2023 - Present",
    position: "Senior Technical Consultant",
    highlights: [
      "Node.js + Angular platform with full DevOps pipeline (CI/CD, Docker, infrastructure automation)",
      "Angular enterprise frontend development",
      "Flutter cross-platform mobile application",
      "Python + LLM/AI backend pipelines and APIs",
      "End-to-end ownership of a data intelligence platform — SwiftUI iOS app, Spring Boot + Java backend with Docker, REST APIs, frontend, and all DevOps",
      "Python backend services with full AWS + Kubernetes infrastructure and DevOps lifecycle ownership",
      "Yamaha (SRE/Platform Engineering): Leading enterprise platform engineering — Terraform infrastructure-as-code across multiple AWS accounts, Lambda, Cognito, DynamoDB, API Gateway, SQS, S3, CloudWatch, X-Ray, Secrets Manager, cross-account IAM, security monitoring, and CI/CD pipeline design with Infracost cost analysis",
    ],
  },
  {
    company: "McKinley & Rice",
    url: "https://mckinleyrice.com",
    time: "Sep 2021 - Jan 2023",
    position: "Senior iOS Developer / Deputy iOS Developer",
    highlights: [
      "Built and shipped iOS mobile applications in Swift/SwiftUI",
      "Developed Next.js web applications for client-facing products",
      "Built Phaser.js browser-based games with TypeScript",
      "Developed Python backend APIs and services",
      "Managed CI/CD pipelines and deployment automation",
      "Progressed from Deputy iOS Developer to Senior iOS Developer",
    ],
  },
  {
    company: "EverExpanse",
    url: "https://www.everexpanse.com",
    time: "Oct 2020 - Sep 2021",
    position: "Associate Architect",
    highlights: [
      "Owned mobile application architecture, code quality, and delivery for React Native projects",
      "Designed component structures and established engineering standards across the team",
      "Mentored developers and guided technical decisions",
      "Delivered cross-platform mobile applications across iOS and Android",
    ],
  },
  {
    company: "Upsquare",
    url: "https://upsquare.solutions",
    time: "Oct 2019 - Oct 2020",
    position: "Software Engineer",
    highlights: [
      "Flutter cross-platform mobile app development (iOS and Android)",
      "Node.js backend API development",
      "Go microservices and backend services",
      "Native iOS app development",
      "DevOps automation and deployment pipelines",
    ],
  },
  {
    company: "WebMob Technologies",
    url: "https://webmobtech.com/",
    time: "Jun 2017 - Jul 2019",
    position: "Software Engineer",
    highlights: [
      "Designed and developed iOS applications from UI implementation to App Store release",
      "Built full-cycle native mobile products for multiple client projects",
      "Worked with React.js for web frontend development",
      "Gained deep experience in mobile architecture, Apple frameworks, and client-facing product delivery",
    ],
  },
];

export const organizations = [
  {
    name: "Tarka Labs",
    url: "https://github.com/tarkalabs",
    description: "Current employer. Building cloud infrastructure for Yamaha Creators Platform using Terraform, AWS, and GitHub Actions.",
    roles: ["Software Engineer", "Terraform", "AWS", "CI/CD"],
  },
  {
    name: "Supabase Community",
    url: "https://github.com/supabase-community",
    description: "Built the entire official Swift SDK ecosystem for Supabase — GoTrue auth, Realtime subscriptions, PostgREST queries, Storage, Functions, and shared core interfaces.",
    roles: ["SDK Creator", "Maintainer", "Swift"],
  },
  {
    name: "RxSwiftCommunity",
    url: "https://github.com/RxSwiftCommunity",
    description: "Contributed RxContacts — an RxSwift wrapper around Apple's Contacts framework — to the official RxSwift ecosystem.",
    roles: ["Contributor", "RxContacts"],
  },
  {
    name: "Theia IDE",
    url: "https://github.com/eclipse-theia",
    description: "Worked on Swift language support for the Theia Cloud IDE, including LSP integration and Docker images.",
    roles: ["Member", "Swift Extension"],
  },
  {
    name: "nomuq",
    url: "https://github.com/nomuq",
    description: "Personal organization for experimental and archived projects. Houses 200+ repos spanning Swift compilers, manga scrapers, VPN tooling, game engines, invoicing apps, and more.",
    roles: ["Owner", "Experiments"],
  },
];

export const projects = [
  {
    name: "realtime-swift",
    url: "https://github.com/supabase-community/realtime-swift",
    description: "A Swift client for Supabase Realtime server. Real-time subscriptions and presence. 52 stars.",
    tags: ["Swift", "Supabase", "WebSocket"],
  },
  {
    name: "postgrest-swift",
    url: "https://github.com/supabase-community/postgrest-swift",
    description: "Swift client for PostgREST. Type-safe database queries with Codable support. 43 stars.",
    tags: ["Swift", "Supabase", "PostgREST"],
  },
  {
    name: "gotrue-swift",
    url: "https://github.com/supabase-community/gotrue-swift",
    description: "A Swift client library for GoTrue authentication. Session management, OAuth, keychain storage. 36 stars.",
    tags: ["Swift", "Supabase", "Auth"],
  },
  {
    name: "storage-swift",
    url: "https://github.com/supabase-community/storage-swift",
    description: "Swift client library to interact with Supabase Storage. File upload, download, and bucket management. 26 stars.",
    tags: ["Swift", "Supabase", "Storage"],
  },
  {
    name: "functions-swift",
    url: "https://github.com/supabase-community/functions-swift",
    description: "Swift client library to interact with Supabase Edge Functions. 10 stars.",
    tags: ["Swift", "Supabase", "Edge Functions"],
  },
  {
    name: "nodejs-boilerplate",
    url: "https://github.com/satishbabariya/nodejs-boilerplate",
    description: "Clean Architecture for Node.js projects with TypeScript, Express, TypeORM, and dependency injection via Typedi. 420 stars.",
    tags: ["TypeScript", "Express", "TypeORM", "Clean Architecture"],
  },
  {
    name: "HexPatternView",
    url: "https://github.com/satishbabariya/HexPatternView",
    description: "Beautiful hexagonal pattern UI component for iOS. 44 stars.",
    tags: ["Swift", "iOS", "UI Component"],
  },
  {
    name: "Chatter",
    url: "https://github.com/satishbabariya/Chatter",
    description: "Real-time chat application built with Swift 4, powered by Firebase Auth, Realtime Database, Cloud Messaging, and Functions. 30 stars.",
    tags: ["Swift", "Firebase", "Real-time Chat"],
  },
  {
    name: "swift-online-playground",
    url: "https://github.com/satishbabariya/swift-online-playground",
    description: "Online Swift playground with IntelliSense powered by Monaco Editor and Language Server Protocol. 25 stars.",
    tags: ["TypeScript", "Monaco Editor", "LSP", "Docker"],
  },
  {
    name: "swift-boilerplate",
    url: "https://github.com/satishbabariya/swift-boilerplate",
    description: "Clean Architecture iOS boilerplate with programmatic UI, MVC, RxSwift, Auto Layout Visual Format, and JWT auth. 23 stars.",
    tags: ["Swift", "RxSwift", "Clean Architecture"],
  },
  {
    name: "qualcomm-atheros-QCA9377-wireless-patch",
    url: "https://github.com/satishbabariya/qualcomm-atheros-QCA9377-wireless-patch",
    description: "Qualcomm Atheros QCA9377 wireless driver patch for Lenovo laptops running Ubuntu. 20 stars.",
    tags: ["Linux", "Ubuntu", "Drivers"],
  },
  {
    name: "go-echo-auth0-middleware",
    url: "https://github.com/satishbabariya/go-echo-auth0-middleware",
    description: "Auth0 JWT authentication middleware for Go's Echo framework. 9 stars.",
    tags: ["Go", "Auth0", "JWT"],
  },
  {
    name: "nodejs-prisma-fastify-boilerplate",
    url: "https://github.com/satishbabariya/nodejs-prisma-fastify-boilerplate",
    description: "Clean Architecture for Node.js projects using Fastify and Prisma. 6 stars.",
    tags: ["TypeScript", "Fastify", "Prisma"],
  },
  {
    name: "swift-snapshots-docker",
    url: "https://github.com/satishbabariya/swift-snapshots-docker",
    description: "Swift Development Snapshot Docker images for CI/CD and development. 6 stars.",
    tags: ["Dockerfile", "Swift", "Docker"],
  },
  {
    name: "resty",
    url: "https://github.com/satishbabariya/resty",
    description: "Simple HTTP Networking Library for Swift with Async/Await and Codable support. 5 stars.",
    tags: ["Swift", "Async/Await", "Networking"],
  },
  {
    name: "tunneler",
    url: "https://github.com/nomuq/tunneler",
    description: "VPN tunneling toolkit with iOS client, PKI, and Go server components.",
    tags: ["Go", "Swift", "VPN"],
  },
  {
    name: "pure-swift-compiler",
    url: "https://github.com/nomuq/pure-swift-compiler",
    description: "Swift compiler implementation written in pure Swift.",
    tags: ["Swift", "Compiler"],
  },
  {
    name: "nstore",
    url: "https://github.com/nomuq/nstore",
    description: "A Firestore server implementation using gRPC and MongoDB.",
    tags: ["Go", "gRPC", "MongoDB"],
  },
  {
    name: "hyperswitch-rust",
    url: "https://github.com/nomuq/hyperswitch-rust",
    description: "Payment switch implementation in Rust.",
    tags: ["Rust", "Payments"],
  },
  {
    name: "manga-sources",
    url: "https://github.com/nomuq/manga-sources",
    description: "Collection of manga source scrapers in Go — mangareader, mangafox, manganato, mangadex, and more.",
    tags: ["Go", "Web Scraping"],
  },
];
