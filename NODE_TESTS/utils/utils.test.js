const utils=require('./utils')
const expect=require('expect')


describe('utils',()=>{
//create a test case
    describe('#add',()=>{
        it('should add two numbers',()=>{
            var result=utils.add(33,11)
            // if(result!==44){
            //     throw new Error(`Expected 44 but got ${result}`)
            // }
            expect(result).toBe(44).toBeA('number')
            })
    })

    it('should asyncadd two numbers',(done)=>{
    
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number')
            done()
        })
    })
    
    it('should asyncSquare x',(done)=>{
    utils.asyncSquare(3,(square)=>{
        expect(square).toBe(9).toBeA('number')
        done()
    })
    })
    
    
    
    
    
    
    
    
    it('should square the input',()=>{
        var res=utils.square(3)
        // if(res!==9){
        //     throw new Error (`Expected 9 but got ${res}`)
        // }
        expect(res).toBe(9).toBeA('number')
    })
    it('should expect some values',()=>{
       // expect(12).toNotBe(11)
      // expect ({name:'Rohan'}).toEqual({name:'Rohan'})
    expect([2,3,4]).toInclude(4)
    
    })
    it('should expect to return first and lastName',()=>{
        var user= {
            location:'texas',
            fullname:'Rohan Ganguly',
            age:30
        }
        var res=utils.setName(user,'Rohan Ganguly')
        expect(res).toInclude({
            firstName:'Rohan',
            lastName:'Ganguly'
        })
    })
    
})
