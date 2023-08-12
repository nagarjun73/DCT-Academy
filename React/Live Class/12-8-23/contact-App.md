Task: Contact List App

You are tasked with creating a Contact List App using React. The app should allow users to manage a list of contacts by adding new contacts, viewing contact details, and searching for specific contacts.

Requirements:

ContactList Component: Create a component named ContactList that maintains a list of contacts. Initialize the state with an empty array called contacts.

Implement the following methods:

addContact(contact): Adds a new contact object to the contacts array in the state.
ContactForm Component: Create a component named ContactForm that allows users to input contact details, including name, phone number, and email. Upon submission, use the addContact method from the ContactList component to add the new contact.

ContactDetails Component: Create a component named ContactDetails that displays the details of a selected contact. Users should be able to click on a contact's name in the ContactList to view their details.

App Component: Create an App component that integrates the ContactForm, ContactList, and ContactDetails components. When a contact's name is clicked, display their details using the ContactDetails component.

Guidelines:

Use React to build the components and manage the state.
The contact details can include properties such as id, name, phone, and email.
Focus on the basic functionality of adding contacts, listing contact names, and viewing contact details.
You can use state management and props to pass data between components.
Use CSS or a styling library of your choice for basic styling to improve the app's visual appearance.
Bonus: Enhance the app by adding features like editing contact details, deleting contacts, and implementing a search functionality. While displaying the contacts, list in alphabetical order.

Note: Feel free to structure your components, files, and directory organization as you see fit. This task provides a starting point for building a basic Contact List App, and you can expand and customize it further based on your creativity and skills.