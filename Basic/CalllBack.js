// when you pass a function as an arguments of other function

function one(){
      console.log('print 1');
}

function two(call_one){
      console.log('print 2')
      call_one()
}
two(one)