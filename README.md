# Virt-HR1

 Virt-HR is an network connecting Students, Colleges, and Recruiters . Virt-HR is a blockchain-based system of verified education, skills, and personal career information. 

Virt-HR is creating value for the entire ecosystem through the Trust as a Service (TAAS) platform. The Virt-HR system stores career information in a hashed, immutable form on a public blockchain. 

Virt-HR also allows candidates, universities, and Recruiters to sign transactions onto a blockchain network.

## stacks


**Front-end**  : React Js, web3 API

**Web3**  : Solidity , Polygon

**Backend**  : Nodejs ,Alchmey RPC, Firebase

# Roles

## No Role

A user having a account can send he admins his/her profile and chat with them as well.
He/she can request for any role candidate or organization.

## Admin

Registers a new user on the blockchain.
Controls any ambiguity in the blockchain.
Responds to role requests from users.
Maintains and scale users.
Can revove/reassign roles of users.

## Candidate

This smart contract is for the candidate and stores information about the candidate:
candidate name, full approval, all listed skills and their contract (clauses 1-10).
Authentication - There will be 2 types of authentication and unauthenticated. A certificate is considered verified when it is validated on the blockchain by the organization that issued it.
Event History - It will have fields like (Organization Name, Name, Details etc.) and there will be two types: Checked and Unchecked.
If the organization confirms it on the blockchain, it is considered proof.
platform ratings (Hackerearth, Codechef, Codeforces etc). These tests will be validated by an API call to the server of the given platform and the correct test will be displayed on the page, so there is no need to click on a linked set of credentials.
Education Research - This content is controlled by the employee's written form (or will be used if the college/university provides an API field to check results) and then stored on the blockchain.

## Organization 

This smart contract is for organizations. Organizations can use it to identify employees' skills, work experience, education, certification. The smart contract contains:
Organization name.
Contains a list of current employees of the organization who are certified to recognize the skills, work, and education of other employees. Only current employees, not former employees, are entitled to do so.
It includes the names of all human resources, talent acquisition teams, and all employees working in the organization. It will be able to edit the job title of
employees.
It will be possible to give certificates to employees for their achievements to be placed on their profiles. According to the job description,
will have the functionality to search for employees on the blockchain and invite them to interview.


## Testing the app
 git clone the project then run
    
    node v16.16.0 is recommended
    
    npm install


##  RPC config

replace your rpc link on truffle-config.js

## Smart contract 
 compile the smart contracts

 truffle comiple

 truffle migrate --network mumbai

## Testing

### run command 

    npm start
