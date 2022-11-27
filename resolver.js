

let demoDB = [
  { id: '0', name: 'Jewel', rent: '$25' },
  { id: '1', name: 'Mahmud', rent: '$35' },
  { id: '2', name: 'Jahid', rent: '$45' },
]

// The rootValue provides a resolver function for each API endpoint
var root = {

    get_all_spaces:()=>{
      return demoDB
    },
    
    addSpace: ({id, name, rent}) =>{
      console.log('======', demoDB)
      return demoDB[demoDB.length]={id, name, rent}
    },
  
    getSpace: ({id})=>{
      console.log('======>', demoDB.find(space=>space.id===id))
      return demoDB.find(space=>space.id===id)
    },
  
    updateSpace: ({id,input})=>{
      return demoDB[id]={id:id, name:input.name, rent:input.rent}
    }
  
  };

module.exports = root;
