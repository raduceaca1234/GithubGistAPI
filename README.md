# GithubGistAPI
Here's the list of full functionality required for the assignment: 

- Search: When a user enters a username, they should be able to get a full list of public Gists by that user. 

- Filetypes: Convert the filetypes of the files in the Gist into a tag/badge (For example, if the returned Gist has a list of files containing Python and Javascript files, the items listed should have the respective tags/badges). 

- Forks: Additionally, include with the list of the Gists, the username/avatar of the last 3 users who have forked it. 

- Gist contents: When clicking one of the Gists, display the content of the file

# Run the application
Clone the application and run the following command to install all the dependencies
```
$ npm install
```
After this step, you cand run the application using the bellow command
``` 
$ yarn start
or
$ npm start
```
# Details about implementation
- I used React to implement this assessment. 
- I used both class components and functional components.
- I also used bootstrap for nice UI elements and redux in order to store the gists.

# Further implementations
- A better and more userfriendly UI.
- To use axios to get the data. For the moment I used the classical fetch.
- To use more functional components, because functional components are much more easier to read and you end up with less code. It will get easier to separate container and presentational components because you need to think more about your component’s state

