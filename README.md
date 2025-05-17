# Miniminds_xyz 🧠 (v1)
RE-IMAGINED EDUCATION FOR THE WEB3 WORLD.

More than just a dApp. MiniMinds is a decentralized education infrastructure designed to empower students, teachers, institutions, and guardians by enabling transparent, personalized, and incentive-driven learning experiences — starting in under-resourced and high-volume learning environments.

Built as a modular dApp, MiniMinds bridges the gap between traditional education systems and the emerging onchain economy through the integration of blockchain, AI agents, and smart incentives.

## Installation

Miniminds is built on Next.js. To install and run the platform locally, follow these steps:

## Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/minimids_xyz.git

2. Navigate to the project directory:
   ``` bash
   cd minimids_xyz/miniminds_frontend
3. install Dependancies
   ``` bash
   npm install or yarn install
4. Start the development server
   ``` bash
   npm run dev or yarn dev
5. Open your browser and navigate to
   ``` bash
   http://localhost:3000

## Usage
###We have three Main Users.(Institutions / creators(teachers,educators) / Learners(students)
To view the actual data and explore the features of Miniminds, you must sign up under the **Master Institute**. You can sign up either as a Learner or an Instructor(teacher) to access available courses and functionality.

## Getting Started
### Sign Up as an Institution  Users (Admins, Directors, School Managers)
Purpose:
To onboard schools, manage teachers and students, and ensure education quality through decentralized tools.

To get started as an institutiom, you need to:
  1. Sign in/sign up(Wallet is created upon signing in).
  2. Verified via DID and registeed on-chain.
  3. Mint a school Identity NFT.


#### Main Functionalities:

  1. Create/manage classes, subjects, streams.
  2. Invite users via unique DID claims or links.
  3. Add classes, manage classes as well as students.

Institutional Dashboard with:

1. Performance metrics.
2. Learning analytics.
3. Filter by class/teacher/date.
4. Content oversight: approve/flag materials.Certify activities with blockchain hashes.
5. Token-based incentive management.


### Sign Up as a Creator (Teacher)
Purpose: To create interactive content, track learner performance, and earn Web3 rewards.
You can join independently or with an institution.
To get started as a creator, you need to:

1. Sign up under the **Master Institute**.
2. Nvigate to the Creator Dashboard to begin creating courses.
3. Set prices in ETH, create course modules, and start teaching.

## Platform Features
Main Functionalities:

1. Teacher Info Page: Overview, Web3 rewards, CTA to join.
2. Dashboard: Track assigned activities, student engagement, NFT badges.
3. Activity Builder: Upload to IPFS, set difficulty, objectives, quizzes.
4. Progress Tracker: Scores + analytics stored on-chain.
5. Shared Resources Library: Fork/rate content, view usage logs.
6. Rewards System: Earn tokens and NFTs for:
   Publishing content
   Student performance
   Peer reviews

   
## Student Users
You can either join independently or with your institution.
Purpose:
To learn from assigned content and build a verifiable on-chain learning profile.

To use miniminds as a student, You need to: 
Sign up.
Mint Student Identity NFT
Assigned to class via smart contract/invite or just explore existing content if signed in Independently.

### Main Functionalities:

   1. Dashboard: Track activities and deadlines.
   2. Engage with Content: View lessons, complete quizzes, submit tasks
   3. Progress Timeline: Scores, badges, reputation stats
   4. Public Profile: Showcase certificates and achievements

## Features.

### Academic Progress Tracking
Miniminds provides a robust system for tracking learner progress, enabling instructors to monitor engagement and course completion rates.

### Content Monetization and Wallets
Creators can monetize their content by setting course fees in ETH. Learners can make payments directly through the platform using their crypto wallets.

### Donation and Funding Drives
Creators and institutions can organize donation drives for educational projects, allowing learners or donors to contribute towards specific causes.

### Blockchain-Based Credentialing
Upon course completion, learners are awarded blockchain-based certificates (NFTs), providing verifiable proof of their achievements.

### Sign Up as a Learner
To begin your learning journey:

1. Sign up under the **Master Institute** as a learner.
2. Browse available courses, enroll, and start learning.
3. Track your progress and receive credentials upon completion.

## How to Use Miniminds (Summary)

### For Creators (Teachers)
1. Navigate to the "My Courses" section from your dashboard.
2. click the Create new course.
3. Add course title, description, modules and lessons to structure your course.
4. Set your price in ETH and publish.

### For Learners
1. Browse the courses available in your dashboard.
2. navigate to learn section.
3. Enroll in the course of your choice and make the necessary payment.
4. Complete lessons and track your progress in real-time.

## Wallet Setup and Transactions

### Setting Up Your coinbase, Optimism Wallet


1. Install a crypto wallet like MetaMask.
2. Add the Base, optimisim network to your MetaMask configuration.
3. Fund your wallet with ETH to make payments on the platform.

### Making Donations and Payments
To make a donation or pay for a course:

1. Ensure your wallet is funded with ETH.
2. Navigate to the payment section of the course or donation drive.
3. Confirm the transaction in your wallet.

   ## 🔗 Web3 Infrastructure & Tech Stack

| Feature               | Technology |
|----------------------|------------|
| Authentication       | Supabase Auth / Web3Auth / WalletConnect |
| File Storage         | IPFS / Arweave | offchain database |
| Identity             | NFTs for Teachers, Students, Institutions |
| Smart Contracts      | Role-based access, NFT minting, reward system |
| Token System         | ERC-20 utility tokens |
| Rewards              | ERC-721 NFT Badges |
| Activity Tracking    | Supabase metadata + on-chain hashes |
| Privacy              | ZK-proofs |
| Frontend             | Next.js + React + Tailwind + shadcn/ui |
| UI Tools             | React Hook Form, Formik, Datepicker, MDX |

---


## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Base Network Setup](https://community.optimism.io/docs/developers/metamask.html](https://docs.base.org/docs/using-base/))
- [MetaMask Setup](https://metamask.io/faqs/)


