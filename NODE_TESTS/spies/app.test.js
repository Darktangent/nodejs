const expect=require('expect')
const rewire=require('rewire')

const app= rewire('./app.js')

describe('App',()=>{
    var db= {
        saveUser: expect.createSpy()
    }
    app.__set__('db',db)

    it('should call spy correctly',()=>{
        var spy=expect.createSpy()
        spy('Andrew',25)
        expect(spy).toHaveBeenCalledWith('Andrew',25)
    })
})