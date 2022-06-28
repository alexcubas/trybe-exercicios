class Superclass {
  constructor(public isSuper: true) { }

  get sayHello() {
  return 'Ola mundo!'    
  }
}

class Subclass extends Superclass {

}
