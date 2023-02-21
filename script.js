const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const account = form.elements['account'].value;
  const amount = form.elements['amount'].value;

  // Process the transaction
  // (This is where you would implement the business logic and database schema required to handle the different transactions)

  // Show a success message
  message.textContent = `Transaction successful: $${amount} deposited to ${account} account for ${name} (${email})`;
  form.reset();
});
