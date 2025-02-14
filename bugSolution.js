```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, email: 1 } }, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    if (result === null) {
      console.log('No document found matching the query.');
    } else {
      console.log('Result:', result);
    }
  }
});

//Additional Check to handle potential issues:
db.collection('users').find(query).toArray((err,results)=>{ //Check if any document matches the criteria
if(results.length === 0){
console.log('No documents found');
}
})
```