```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, email: 1 } }, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Result:', result); //result might be null if no document matches
  }
});
```