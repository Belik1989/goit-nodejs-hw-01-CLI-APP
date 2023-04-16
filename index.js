const contacts = require("./contacts.js");
const { program } = require("commander");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const invokeActions = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;
    case "get":
      const contact = await contacts.getContactById(contactId, {
        name,
        email,
        phone,
      });
      console.log(contact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "updateContact":
      const updateContact = await contacts.updateContact(name, email, phone);
      console.log(updateContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(contactId);
      console.log(removeContact);
      break;

    default:
      break;
  }
};
// invokeActions({ action: "listContacts" });
// invokeActions({ action: "getContactById", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeActions({
//   action: "addContact",
//   name: "Ivan Sirko",
//   email: "gory.moskva@gamil.com",
//   phone: "(666) 666-6666",
// });
// invokeActions({
//   action: "updateContact",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
//   name: "Allen Raymond-Green",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// });
// invokeActions({
//   action: "removeContact",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });
// const arr = hideBin(process.argv);
// console.log(arr);

// const { argv } = yargs(arr);
// console.log(argv);

program
  .option("--action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse(process.argv);

const options = program.opts();
console.log(options);

invokeActions(options);
