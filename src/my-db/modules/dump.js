import { map, identity } from 'ramda';

const mapIdentity = (item) => map(identity, item);

function dump(db) {
  // console.log(db);
  // console.log(map(identity, db));
  // console.log(mapIdentity((mapIdentity(mapIdentity(db)))));
  db.forEach(i =>
    i.forEach(a => {
      a.forEach(x => {
        console.log({x});
      })
    })  
    
  );
}

export default dump;
